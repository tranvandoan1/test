import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { $ } from '../../ultis'
import SaveorderAPI from '../API/SaveOrder'
import TableAPI from '../API/TableAPI'
import { useDispatch,useSelector } from 'react-redux'
import { getSaveOrder } from '../../features/saveorderSlice/saveOrderSlice'
const ListTable = () => {
    const dispatch = useDispatch()
    const [saveoder, setSaveoder] = useState([])
    const [table, setTable] = useState([])
    const [nameTable, setNameTable] = useState()
    const [idTable, setIdTable] = useState()
    const saveorders=useSelector(data=>data)
    console.log(saveorders)
    useEffect(() => {
        const getData = async () => {
            const { data: table } = await TableAPI.getAll();
            console.log(table)
            const { data: saveoder } = await SaveorderAPI.getAll()
            setSaveoder(saveoder)
            setTable(table)
        }
        getData()
        dispatch(getSaveOrder())
    }, [])
    const listAddTable = () => {
        $(".list-add-table").classList.add("active-add")//hiện input 
        window.addEventListener("click", (e) => { //ấn vào màn hình là mất input 
            (e.target == $(".list-add-table") && $(".list-add-table").classList.remove("active-add"))
            setNameTable()
        })
    }

    const addTable = () => {
        TableAPI.addOder({
            "id": Math.random(),
            name: nameTable
        });
        setNameTable('')
        setTable(
            [...table,
            {
                "id": Math.random(),
                name: nameTable
            }
            ]
        )
        setIdTable()
        $(".list-add-table").classList.remove("active-add")//hiện input 
    }
    const deleteTable = (id) => {
        TableAPI.remove(id)
        setTable(table.filter(item => item.id !== id))
    }

    return (
        <React.Fragment>
            <div className="row">
                {table.map(item => {

                    return (
                        <div className="col-3 col-md-1" key={item.id}>
                            <div className="user_group" onClick={() => setIdTable(item.id)}>
                                {
                                    saveoder.map(itemOrder => (item.id == itemOrder.id_table && <div key={itemOrder.id} className="ton" style={{ backgroundColor: "yellowgreen" }} ></div>))
                                }
                                <div className="icon_user"><i className="fas fa-users"></i></div>
                                <div className="name_user_o">{item.name}</div>

                                {/* <!--hiện xóa và vào oder--> */}
                                {item.id == idTable &&
                                    <div className="delete-oder show-oder">
                                        <div className="delete-table">
                                            <div className="oder__"><Link to={`/oder/id=${item.id}`}>oder</Link></div>
                                            <div className="delete__table" onClick={() => deleteTable(item.id)}><a >xóa bàn</a></div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    )

                })}
                <div className="col-3 col-md-1">
                    <div className="add-table" onClick={() => listAddTable()}>
                        <div className="add"><i className="fas fa-plus"></i></div>
                        <div>Thêm bàn</div>
                    </div>
                </div>
            </div>

            <div className="list-add-table ">
                <div className="table">
                    <div className="input-add">tên bàn : <input type="text" onChange={e => setNameTable(e.target.value)} value={nameTable} placeholder="Nhập tên bàn ..." /></div>
                    <button onClick={() => addTable()}>Thêm</button>
                </div>
            </div>
        </React.Fragment>

    )
}

export default ListTable