

function list(props){
    // console.log ("props",props);
    return (
    <div> {props.itemList.map(itemObj=>
            {
                <p>{itemObj.item}</p>
            })}
            </div>
            );
        }

export default list;