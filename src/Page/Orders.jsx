import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CateAPI from '../API/CateAPI'
import ProAPI from '../API/ProAPI'
import SaveorderAPI from '../API/SaveOrder'
import { useDispatch, useSelector } from 'react-redux'
import { addSaveorder, getSaveOrder, updateSaveorder } from '../../features/saveorderSlice/saveOrderSlice'
const Orders = () => {
    const [products, setProduct] = useState([])
    const [categories, setCategori] = useState([])
    const [productOrder, setProductOrder] = useState([])
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()
    const saveorders = useSelector(data => data.saveorder.value)
    useEffect(() => {
        dispatch(getSaveOrder())
        const listData = async () => {
            const { data: products } = await ProAPI.getAll()
            const { data: categories } = await CateAPI.getAll()
            setProduct(products)

            // lấy ra danh sách cate mà có sản phẩm
            const cateArr = []
            categories.filter(cate => {
                products.map(pro => {
                    if (pro.cate_id == cate.id) {
                        cateArr.push(cate)
                    }
                })
            })
            // lấy ra cách tên danh mục không trùng nhau
            const commodityvalueArr = (cateArr = []) => {
                const newCommodityvalue = [];
                while (cateArr.length > 0) {
                    newCommodityvalue.push(cateArr[0]);
                    cateArr = cateArr.filter(item => item.name !== cateArr[0].name)
                }
                return newCommodityvalue
            }
            setCategori(commodityvalueArr(cateArr))

            setProductOrder(saveorders.filter(item => item.id_table == id));
        }
        listData()
    }, [])

    const selectProduct = async (id_pro) => {
        const newSaveOder = products.find(item => item.id == id_pro)
        const newOder = {
            id_oder: `${Math.random()}`,
            amount: `1`,
            id_table: id,
            ...newSaveOder,
          };
        SaveorderAPI.remove('0.875796218453081')
        console.log(newOder )
        // setProductOrder([...saveorders,{ ...newSaveOder, newOder}])
        // console.log({ ...newSaveOder, id_oder: `${Math.random()}` })
        // dispatch(addSaveorder({ ...newSaveOder, newOder}))
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <div className="box">
                        <div className="prev"><i className="fas fa-arrow-circle-left"></i><a href="/#/">Quay lại </a></div>
                        <div className="hiuy">
                            <div className="search">
                                <input type="text" placeholder="Tìm kiếm ....." />
                                <button><i className="fas fa-search"></i></button>
                            </div>
                            <div className="cate">
                                <ul>
                                    <li><a href="/#/">Tất cả sản phẩm</a></li>
                                    {categories.map(item => {
                                        return (
                                            <li key={item.id}><a href="#categoris-${item.id}">{item.name}</a></li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="products">
                        {categories.map(item_cate => {
                            return (
                                <React.Fragment key={item_cate.id}>
                                    <div className="list-cate" >{item_cate.name}</div>
                                    <div className="row">
                                        {products.map(item_pro => {
                                            if (item_cate.id == item_pro.cate_id) {
                                                return (
                                                    <div className="col-md-3" key={item_pro.id} onClick={() => selectProduct(item_pro.id)}>
                                                        <div className="list_pro" >
                                                            <div className="img"><img src={item_pro.image} alt="" />
                                                                <div className="name-price">
                                                                    <div className="name">{item_pro.name}</div>
                                                                    <div className="price">{item_pro.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}đ</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </React.Fragment>
                            )
                        })}
                    </div>
                </div>
                <div className="box_l ">
                    <div className="box_ll">
                        <div className="weight">
                            Nhập Cân nặng : <span className="in"><input type="text" id="weight" placeholder="Mời nhập cân nặng..." name="" /></span> <span className="create-update">Áp dụng</span>
                            <div className="chu_y">(Chú ý <span className="sao">*</span> : tùy theo sản phẩm mới nhập cân nặng)</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="oder">
                        <div className="oder_pro">Sản phẩm đã chọn</div>
                        <div className="box-oder">
                            {productOrder.map((item, index) => {
                                return (
                                    <div className="name_oder" key={index}>
                                        <div className="row">
                                            <div className="col-md-2">
                                                <span className="stt">{index + 1}</span>
                                            </div>
                                            <div className="col-md-7">
                                                <span className="name_ode">{item.name}</span>
                                            </div>
                                            <div className="col-md-3">
                                                <span className="quantity buttons_added">
                                                    <input type="button" className="minus button is-form" />
                                                    <input type="number" className="input-text qty text" value={quantity} min="1" max="9999" name="quantity" />
                                                    <input type="button" value="+" className="plus button is-form" />
                                                </span>
                                            </div>
                                            <hr />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="discount">

                            <div className="inpkk ">chiết khấu: <input type="text" id="inpu_Sale" placeholder="Mời bạn nhập chiết khấu..." />
                                <button className="ap1">Áp dụng</button>
                                <div className="sale_inp"><a>Nhập chiết khấu</a></div>

                            </div>
                            <div className="display_ap"></div>
                            <div className="sum">Tổng Tiền : <span className="sum_price"></span></div>
                            <div className="payy"><button className="pay">Thanh toán</button></div>


                            <div className="ko00">
                                <div className="ko_1">
                                    <div className="idon_ko"><i className="fas fa-sync-alt"></i></div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders