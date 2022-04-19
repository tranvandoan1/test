import React from 'react'
import "../css/Home.css"
import "../css/Group.css"
import ListHome from './ListTable.jsx'

const Home = () => {
  
    return (
        <div className="group_home">
  
            {/* <div className="home">*/}
            <div className="title"> <span>bếp deli deli xin chào quý khách</span> </div>
            {/* <!-- nhóm --> */}
            <div className="class_home">
                <div className="class">
                    <div className="class_one">
                        <div className="choose ">
                            <br />
                            <span className="group pro">oder bàn</span>
                        </div>

                        <div className="oderr_n olu">
                            <hr />
                            <div className="ko">
                                <ListHome />
                            </div>
                        </div>
                    </div>
                    <div className="class_group acti">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="menu_ql">
                                    <div className="dmql hhhhh">quản lý danh mục</div>
                                    <div className="dmql">quản lý sản phẩm</div>
                                    <div className="dmql">quản lý thực đơn</div>
                                </div>
                            </div>
                            <div className="col-md-10">
                                {/* <!--  danh mục --> */}

                                <div className="dm hhjih">
                                    <div className="title_dm">quản lý danh mục</div>
                                    <div className="add_dm">thêm danh mục</div>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="categori">
                                        {/* {await ListCate.render()} */}
                                    </div>
                                </div>
                                {/* <!--  sản phẩm --> */}
                                <div className="dm ">
                                    <div className="title_pro">quản lý sản phẩm</div>
                                    <div className="add_pr">thêm sản phẩm</div>
                                    <br />
                                    <br />
                                    <br />
                                    <div className="products">
                                        {/* {await ListPro.render()} */}
                                    </div>
                                </div>
                                <div className="dm ">
                                    {/* {await ListOder.render()} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- quản lý --> */}

            <div className="menu">
                <div className="row">
                    <div className="col-md-6 jo ">
                        <div className="menu_group aacc">quản lý ca</div>
                    </div>
                    <div className="col-md-6">
                        <div className="case_management ">quản lý riêng</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home