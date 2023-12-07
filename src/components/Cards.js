/* eslint-disable jsx-a11y/img-redundant-alt */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ReactWhatsapp from "react-whatsapp";

export function Cards({ img }) {
  return (
    <Card className="w-96">
      <CardHeader
        floated={false}
        className="h-80 flex flex-row justify-evenly overflow-hidden"
      >
        {img.item === 2 ? (
          <>
            <div className=" object-contain object-center h-full w-full hover:scale-[1.2] transition-all ease-in-out duration-[0.3s]">
              <img
                src={img.source1}
                alt="profile-picture"
                className=" h-full"
              />
            </div>
            <div className=" object-center h-full w-full hover:scale-[1.2] transition-all ease-in-out duration-[0.3s]">
              <img
                src={img.source2}
                alt="profile-picture "
                className=" h-full"
              />
            </div>
          </>
        ) : (
          <>
            <img
              src={img.source1}
              alt="profile-picture"
              className=" h-full w-full object-cover hover:scale-[1.2] transition-all ease-in-out duration-[0.3s] "
            />
          </>
        )}
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          <h4>{img.name}</h4>
        </Typography>

        <div className="flex flex-row px-5 gap-5">
          <div>
            <Typography color="blue-gray" className="mb-2">
              {img.description}
            </Typography>
          </div>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            <b>
              &#8377;
              {img.price}
            </b>
          </Typography>
        </div>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <ReactWhatsapp
          number="+91 7204310592"
          message={img.name + "\n" + img.description + "\n" + img.price}
          className=" w-full"
        >
          <Button fullWidth>Book Now!</Button>
        </ReactWhatsapp>
      </CardFooter>
    </Card>
  );
}
