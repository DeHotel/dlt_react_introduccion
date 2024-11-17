import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "../assets/css/styleCard.css";
import { formatNumber } from "../utils/formatNumber";

const CardPizza = (props) => {
  return (
    <Card className="max-w-96 flex-col">
      <CardHeader color="blue-gray" className="relative h-50">
        <img src={props.imagen} alt="FotoPizza" />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" className="ml-2 mt-2 mb-2 font-bold">
          Pizza {props.nombre}
        </Typography>
        <hr />
        <Typography className="text-center text-1sm mt-5">
          Ingredientes:
        </Typography>
        <Typography className="text-center text-1sm mb-5">
          🍕 {props.ingred}
        </Typography>
        <hr />
        <Typography className="text-center text-1xl font-bold mt-3 mb-3">
          Precio: ${formatNumber(props.precio)}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-between p-5">
        {/* <div className=""> */}
        <Button className="btn boton-verMas">Ver más 👀</Button>
        <Button className="btn boton-anadir">Añadir 🛒</Button>
        {/* </div> */}
      </CardFooter>
    </Card>
  );
};

export default CardPizza;
