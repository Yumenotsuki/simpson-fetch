import  React  from  'react';

const  DisplaySimpson = ({simpson }) => {
    return (
        <div  className="DisplaySimpson">
            <img  src={simpson.image}  alt=""  />
            <ul>
                <li>
                    character : {simpson.character}
                </li>
                <li>
                    Quote : {simpson.quote},
                </li>
            </ul>
        </div>
    );
};

export  default  DisplaySimpson;
