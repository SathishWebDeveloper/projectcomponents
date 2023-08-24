import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
//these are the material ui component and install two package to implement it 
// yarn add @types/react-beautiful-dnd
// yarn add react-beautiful-dnd     

const dropDowndata = [
    {
        name: 'Active',
        value: 'active',
    },
    {
        name: 'Inactive',
        value: 'inactive',
    }
];
const formData = [
    {
        id: 1,
        name: 'Hindu',
        status: 'active',
    },
    {
        id: 2,
        name: 'Christian',
        status: 'active',
    },
    {
        id: 3,
        name: 'Muslim',
        status: 'inactive',
    },
    {
        id: 4,
        name: 'Sikhism',
        status: null,
    },
    {
        id: 5,
        name: 'Buddist',
        status: null,
    },
    {
        id: 6,
        name: 'Jainism',
        status: null,
    },
    {
        id: 7,
        name: 'Jews',
        status: null,
    },
    {
        id: 8,
        name: 'Chinese Tradional',
        status: null,
    },
    {
        id: 9,
        name: 'Non-Religious',
        status: null,
    },
];

function DragableTable(item: any) {
    const { formatMessage } = useIntl();
    const [form, setForm] = React.useState<any>(formData);


    // const handleStatusChange = (value: string, index: number) => {
    //     let updatedForm = [...form];
    //     updatedForm[index].status = value;
    //     setForm(updatedForm);
    // }; this is status box 

    const getItemStyle = (isDragging:any, draggableStyle:any) => ({
        background: isDragging ? "#D3D3D3" : "white",
        ...draggableStyle
    });
    

    const onDragEnd = (result:any) => {

        if (!result.destination) {
            return;
        }
        const items = Array.from(form);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setForm(items);
    };


    return (
        <TableContainer component={Paper}>
            <Table sx={{ border: '1px solid #DDE2E4', borderRadius: '8px' }}>
                <TableHead>
                    <TableRow sx={{
                        backgroundColor: '#F7F9FF',
                        'th': {
                            fontSize: 13, color: '#5F5F5F', fontWeight: 500, padding: '10px 0px', textAlign: 'center',
                        }
                    }}>
                        <TableCell></TableCell>
                        <TableCell>
                            <MuiCheckbox
                                checked={item.checked}
                                onChange={item.handleCheckbox}
                            />
                        </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell align='center'>Options</TableCell>
                    </TableRow>
                </TableHead>

                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <TableBody
                                {...provided.droppableProps}
                                ref={provided.innerRef}>
                                {form.map((data:{id:number,name:string,status:string|null}, index:number) => (                                  
                                    <Draggable
                                        key={data.id}
                                        draggableId={"q-" + data.id}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <TableRow
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}

                                                sx={{
                                                    'td': { fontSize: 14, padding: '10px 0px', color: '#0E0E0E', fontWeight: 500, textAlign: 'center' }
                                                }}>
                                                <TableCell sx={{ width: '30px' }}>
                                                    <DragIndicator sx={{ fontSize: 27, color: '#DDE2E4' }} />
                                                </TableCell>
                                                <TableCell sx={{ width: '80px' }}>
                                                    <MuiCheckbox checked={item.checked}
                                                    /> </TableCell>
                                                <TableCell>{data.name}</TableCell>
                                                <TableCell>
                                                    <Box sx={{ minWidth: 120 }}>

                                                        {/* drop down  */}
                                                        <ButtonDropdown
                                                            value={data.status}
                                                            data={dropDowndata}
                                                            onChange={(data) => handleStatusChange(data, index)}
                                                            style={{
                                                                select: {
                                                                    backgroundColor: data.status === 'active' ? '#e1ecfe' : data.status === 'inactive' ? '#fcd6d6' : '#F5F5F5',
                                                                    color: data.status === 'active' ? '#0e5ee1' : data.status === 'inactive' ? '#ef2424' : '#00000'
                                                                },
                                                                root: { width: '100px' }
                                                            }}
                                                        />
                                                    </Box>
                                                </TableCell>
                                                <TableCell align='center' sx={{ width: '80px', 'button': { color: '#252525', 'svg': { fontSize: 20 } } }}>
                                                    <Stack direction='row'>
                                                        <IconButton>
                                                            <EditNote />
                                                        </IconButton>
                                                        <ConfirmationPopup title={formatMessage({ id: "settings.masterform.deleteconfirmation" })} />
                                                        <IconButton>
                                                            {/* <DeleteOutline /> */}
                                                        </IconButton>
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </TableBody>
                        )}
                    </Droppable>
                </DragDropContext>
            </Table>
        </TableContainer>
    )
}



/// another drag and drop for div box with codepen 
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./App.css";

const finalSpaceCharacters = [
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png"
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png"
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png"
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png"
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png"
  }
];

function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Final Space Characters</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
      <p>
        Images from{" "}
        <a href="https://final-space.fandom.com/wiki/Final_Space_Wiki">
          Final Space Wiki
        </a>
      </p>
    </div>
  );
}

export default App;