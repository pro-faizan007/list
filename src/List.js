

function list(props){
    return (
    <div>
         {props.itemList.map(itemObj=> {
             return  ( 
             <div className="item">
                 <p>{itemObj.item}</p>
                 <button>X</button>
                </div>
                );
            })}
            </div>
            );
        }

export default list;