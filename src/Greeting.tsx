
//********************************utiliser type ************************************************
/* type NameProps={
    name:string;
}*/

//*********************************utliser interface***************************************
interface NameProps {
    name: string;
  }
const Greeting = ({ name }: NameProps) => { //definir le type de name
return <div>Hello, {name}!</div>;
 };


  export default Greeting;