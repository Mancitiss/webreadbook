import { Row, Col, Rate, Tree } from "antd";
import Image from "next/image";
// import Book1 from '../../assets/images/baner-book1.png'
const { TextArea } = Input;
import { EditFilled } from "@ant-design/icons";
import TextHeading from "../common/TextHeading";
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button, InputNumber } from 'antd';
import { useState, useRef, useEffect } from 'react';
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { useRouter } from 'next/router';
const { Option } = Select;

let index = 0;

export default function EditBookContent() {
    const [category, setCategory] = useState([]);
    const [select, setSelect] = useState(true);//
    const [btnSelect, setBtnSelect] = useState(true);//
    const [btnCancel, setBtnCancel] = useState(true);
    const [btnAdd, setBtnAdd] = useState(true);
    const [btnSave, setBtnSave] = useState(true);
    const [cata, setCata] = useState("1");
    const [mainContent, setMainContent] = useState("")
    const [items, setItems] = useState([]);
    const [chapter, setChapter] = useState([]);
    const [name, setName] = useState('');
    const [imgBook, setImgBook] = useState('')
    const [estimate, setEstimate] = useState(0)
    const [nameBook, setNameBook] = useState('')
    const [nameChap, setNameChap] = useState('')
    const [file, setFile] = useState(null)
    const [indexChap, setIndexChap] = useState(0)
    const [showIndexChap, setShowIndexChap] = useState("Select chap")
    const [content, setContent] = useState("")
    const [chapterIsCho, setChapterIsCho] = useState("Select chapter")

    async function getCategory() {
        let data_new = []
        let res = await axios.get("http://127.0.0.1:8000/api/categorys/?format=json")
            .then(
                response => {
                    let data = response.data
                    for (let temp of data) {
                        let ob =
                        {
                            value: temp.id,
                            label: temp.category_name,
                        }
                        data_new.push(ob)
                    };

                }
            )
            .catch(
                error => console.log(error)
            );
        setCategory(data_new)
        //console.log(data_new)
    }

    async function getIdStory() {
        let data_new = []
        let res = await axios.get("http://127.0.0.1:8000/api/story-new/")
            .then(
                response => {
                    let data = response.data
                    data_new = data

                }
            )
            .catch(
                error => console.log(error)
            );
        localStorage.setItem('id_story', data_new[0].id);
        localStorage.setItem('total_chapter', data_new[0].total_chapters)
        localStorage.setItem('story_name', data_new[0].story_name)
        localStorage.setItem('category_name', data_new[0].category_name)
        localStorage.setItem('image_story', data_new[0].image)
        localStorage.setItem('introduce', data_new[0].introduce)
        //console.log(data_new[0].id)
    }
    async function getStory() {
        let data_new = []
        let exist = true
        let res = await axios.get("http://127.0.0.1:8000/api/story/" + localStorage.getItem("id_story") + "/")
            .then(
                response => {
                    let data = response.data
                    data_new = data

                }
            )
            .catch(
                error => {
                    console.log(error)
                    alert("No exist")
                    exist = false
                }
                
            );
        if(!exist){
            return
        }
        localStorage.setItem('id_story', data_new.id);
        localStorage.setItem('total_chapter', data_new.total_chapters)
        localStorage.setItem('story_name', data_new.story_name)
        localStorage.setItem('category_name', data_new.category_name)
        localStorage.setItem('image_story', data_new.image)
        localStorage.setItem('introduce', data_new.introduce)
        setNameBook(localStorage.getItem('story_name'))
        setEstimate(localStorage.getItem('total_chapter'))
        setCata(localStorage.getItem('category_name'))
        setMainContent(localStorage.getItem('introduce'))
        var str = localStorage.getItem('image_story', data_new.image)
        if(str != "null"){
            setImgBook(str)
        }
        
        
        document.getElementById("update__baner__book").disabled = true;
        document.getElementById("mStory").disabled = true;
        document.getElementById("nStory").disabled = true;
        document.getElementById("iStory").disabled = true;
        document.getElementById("cStory").disabled = true;
        document.getElementById("btnAddStory").hidden = true;
        document.getElementById("btnEditStory").hidden = false;
        document.getElementById("btnDelStory").hidden = false;
        setBtnSelect(false)
    }

    async function getChapter() {
        var story_id = localStorage.getItem('id_story')
        let data_new = []
        let res = await axios.get("http://127.0.0.1:8000/api/get_chapter/" + story_id + "/")
            .then(
                response => {
                    let data = response.data
                    for (let temp of data) {
                        let ob =
                        {
                            id: temp.id,
                            index: temp.index,
                            chapter_name: temp.chapter_name,
                            content: temp.content
                        }
                        data_new.push(ob)
                    };

                }
            )
            .catch(
                error => console.log(error)
            );
        setItems(data_new)
        //console.log(items)
    }
    const addStory = async () => {
        if (estimate <= 0) {
            alert("Chap estimate > 0")
            return
        }
        if (nameBook == '' || nameBook === '') {
            alert("Can not leave the name blank")
            return
        }
        var formdata = new FormData();
        formdata.append("story_name", nameBook);
        formdata.append("category_name", cata);
        formdata.append("create_date", "");
        formdata.append("author", localStorage.getItem("id"));
        formdata.append("image", file);
        formdata.append("total_chapters", estimate);
        formdata.append("user", localStorage.getItem("id"));
        formdata.append("showtimes", "2 4 6");
        formdata.append("rating", "");
        formdata.append("views", "");
        formdata.append("introduce", mainContent);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/api/story/", requestOptions)
            .then(response => response.text())
            .then(getChapter())
            .catch(error => console.log('error', error));
        getIdStory()
        alert("Add story success.")
        document.getElementById("btnAddStory").disabled = true;
        document.getElementById("update__baner__book").disabled = true;
        document.getElementById("mStory").disabled = true;
        document.getElementById("nStory").disabled = true;
        document.getElementById("iStory").disabled = true;
        document.getElementById("cStory").disabled = true;
        document.getElementById("btnEditStory").hidden = false;
        document.getElementById("btnDelStory").hidden = false;
        document.getElementById("btnAddStory").hidden = true    ;
        setSelect(false)
        setBtnSelect(false)
        setItems([])

    }
    const editStory = () => {
        document.getElementById("mStory").disabled = false;
        document.getElementById("nStory").disabled = false;
        document.getElementById("iStory").disabled = false;
        document.getElementById("cStory").disabled = false;
        document.getElementById("btnSaveStory").hidden = false;
        document.getElementById("btnEditStory").hidden = true;
        document.getElementById("btnDelStory").hidden = true;
        document.getElementById("update__baner__book").disabled = false;
        
    }
    const router= useRouter()
    const isEdit = () => {
        var isE = window.location.pathname.slice(14, 19)
        if(isE == 'edit='){
            localStorage.setItem("id_story", window.location.pathname.slice(19))
            getStory()
            document.getElementById("btnAddStory").disabled = true;
            document.getElementById("update__baner__book").disabled = true;
            document.getElementById("mStory").disabled = true;
            document.getElementById("nStory").disabled = true;
            document.getElementById("iStory").disabled = true;
            document.getElementById("cStory").disabled = true;
            document.getElementById("btnEditStory").hidden = false;
            document.getElementById("btnDelStory").hidden = false;
            document.getElementById("btnAddStory").hidden = true    ;
            setSelect(false)
            setBtnSelect(false)
            setItems([])
        }
        
    }
    const saveStory = async () => {


        
        if (estimate <= 0) {
            alert("Chap estimate > 0")
            return
        }
        if (nameBook == '' || nameBook === '') {
            alert("Can not leave the name blank")
            return
        }
        var formdata = new FormData();
        formdata.append("story_name", nameBook);
        formdata.append("category_name", cata);
        formdata.append("create_date", "");
        formdata.append("author", localStorage.getItem("id"));
        formdata.append("image", file);
        formdata.append("total_chapters", estimate);
        formdata.append("user", localStorage.getItem("id"));
        formdata.append("showtimes", "2 4 6");
        formdata.append("rating", "");
        formdata.append("views", "");
        formdata.append("introduce", mainContent);

        var requestOptions = {
            method: 'PUT',
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/api/story/" + localStorage.getItem("id_story") + "/", requestOptions)
            .then(response => response.text())
            .then(getChapter())
            .catch(error => console.log('error', error));

        alert("Edit story success.")
        document.getElementById("btnAddStory").disabled = true;
        document.getElementById("update__baner__book").disabled = true;
        document.getElementById("mStory").disabled = true;
        document.getElementById("nStory").disabled = true;
        document.getElementById("iStory").disabled = true;
        document.getElementById("cStory").disabled = true;
        document.getElementById("btnSaveStory").hidden = true;
        document.getElementById("btnEditStory").hidden = false;
        document.getElementById("btnDelStory").hidden = false;
        setSelect(false)
        setBtnSelect(false)
        setItems([])

    }

    const addChapter = async () => {
        setBtnSelect(false)
        document.getElementById("btnInsertChap").disabled = true;
        // console.log(indexChap)
        // console.log(nameChap)
        // console.log(content)
        // console.log(localStorage.getItem("id_story"))

        var formdata = new FormData();
        formdata.append("index", indexChap);
        formdata.append("story", localStorage.getItem("id_story"));
        formdata.append("chapter_name", nameChap);
        formdata.append("content", content);

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/api/chapter/", requestOptions)
            .then(response => response.text())
            .then(getChapter())
            .catch(error => console.log('error', error));
        alert("Add chapter success")
        getChapter()
        setBtnAdd(true)
        document.getElementById("btnInsertChap").disabled = false;
        setBtnSave(false)
        setBtnSave(true)
        document.getElementById("btnAdd").hidden = true ;
    }

    const editChapter = async () => {
        var formdata = new FormData();
        formdata.append("story", localStorage.getItem("id_story"));
        formdata.append("chapter_name", nameChap);
        formdata.append("content", content);

        var requestOptions = {
            method: 'PUT',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/chapter/" + localStorage.getItem("id_chap") + "/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert("Edit chapter success")
        getChapter()
    }

    const delChapter = async () => {
        var formdata = new FormData();
        var requestOptions = {
            method: 'DELETE',
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://127.0.0.1:8000/api/chapter/" + localStorage.getItem("id_chap") + "/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        alert("Delete chapter success")
        getChapter()
        setContent("")
        setNameChap("")
        setBtnCancel(true)
    }
    const delStory = async () => {
        var requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          };
          
          fetch("http://127.0.0.1:8000/api/story/" + localStorage.getItem("id_story") +"/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        alert("Delete story success")
        localStorage.setItem("id_story", "")
        localStorage.setItem("is_edit", "false")
        getChapter()
        setContent("")
        setNameChap("")
        setBtnCancel(true)
        router.reload()
        
    }
    const onChange = (e) => {
        console.log(e);
    };

    // const inputRef = useRef(null);
    const onNameChange = (event) => {
        setName(event.target.value);
    };
    const addItem = (e) => {
        e.preventDefault();
        if (indexChap <= 0) {
            alert("Chap estimate > 0")
            return
        }
        if (indexChap == 0) {
            alert("Input index")
            return
        }
        for (let temp of items) {
            if (indexChap == temp.index) {
                alert("Chapter is axist")
                return
            }
        }
        setItems([{ index: indexChap }, ...items]);
        document.getElementById("btnInsertChap").disabled = true;
        setBtnSave(true)
        setBtnSelect(true)
        setBtnAdd(false)
        setChapterIsCho(indexChap)
        document.getElementById("btnAdd").hidden = false;
        document.getElementById("btnSave").hidden = true;
        document.getElementById("btnCancel").hidden = true;

    };
    const [attribute, setAtrribute] = useState(false)
    useEffect(() => {
        isEdit()
        getChapter()
        getCategory()
        const textArea = document.querySelector('.component__detail__edit__content--detail')
        if (attribute === false) {
            textArea.removeAttribute('readOnly')
        }
    }, [attribute])
    const updateImage = (e) => {
        // console.log(e.target.files[0]);
        const img = URL.createObjectURL(e.target.files[0])
        setImgBook(img)
        setFile(e.target.files[0])
    }
    const handleChange = (value) => {
        setCata(value)
        //console.log(`selected ${value}`);
    };
    const nameChapter = (key) => {
        try {
            document.getElementById("btnSave").hidden = false;
            document.getElementById("btnCancel").hidden = false;
            setChapterIsCho(key)
            setBtnSave(false)
            setBtnCancel(false)
            for (let temp of items) {
                if (key == temp.index) {
                    //console.log(temp.index)
                    setNameChap(temp.chapter_name)
                    setContent(temp.content)
                    localStorage.setItem("id_chap", temp.id)
                    return
                }

            }

        } catch (error) {
            setNameChap("")
        }


        //console.log(`selected ${value}`);
    };


    return (
        <div>
            <div className="component__detail__edit">
                <Row>
                    <Col lg={8} sm={12} xs={24}>
                        <input type={'file'} style={{ display: 'none' }} id='update__baner__book' onChange={updateImage} />
                        {
                            imgBook ? (
                                <div className="component__detail__edit__img">
                                    <Image src={imgBook} layout='fill' alt='hinh bia sach' height={310} />
                                    <label htmlFor="update__baner__book"><div className="component__detail__edit__content--icon icon__edit" >
                                        <EditFilled />
                                    </div></label>
                                </div>

                            ) : (
                                <div>
                                    <label htmlFor="update__baner__book"><div className="upload__img__book">
                                        <PlusCircleOutlined />
                                    </div></label>
                                </div>
                            )
                        }
                        <div className="component__detail__edit__info">
                            <Row>
                                <Col span={24}>
                                    <div className="component__detail__edit__information">
                                        <div className="input__name__book">
                                            <p className="title__input__name">Name book :</p>
                                            <Input value={nameBook} id="nStory" className="input__name__book--input" placeholder="Your book name" onChange={event => setNameBook(event.target.value)} />
                                            <p id="cStory" className="title__input__name">Category</p>
                                            <Select value={parseInt(cata)} className=" select__chap__edit" placeholder="Choose your category" onChange={handleChange} options={category}></Select>
                                            <br></br><br></br>
                                            <span className="title__input__name">Chap estimate :</span>
                                            <br></br><br></br>
                                            <Input value={estimate} placeholder="Chap estimate" id="iStory" className="input__name__book--input" type="number" min="0" onChange={event => setEstimate(event.target.value)} />
                                        </div>

                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={16} sm={12} xs={24}>
                        <div className="component__detail__edit__content">
                            <h3 className="component__detail__edit__content--title">Main content</h3>
                            <span className="component__detail__edit__content--icon" onClick={() => { setAtrribute(false) }} >
                                <EditFilled />
                            </span>
                            <TextArea value={mainContent} id="mStory" onClick={() => { setAtrribute(true) }} className="component__detail__edit__content--detail" defaultValue={mainContent} allowClear readOnly onChange={event => setMainContent(event.target.value)} />

                        </div>
                        <div className="component__detail__edit__content--btn">
                            <Button hidden id="btnDelStory" className="btn__cancel__edit" onClick={() => { delStory() }} >Delete</Button>
                            <Button id="btnAddStory" className="btn__save__add" onClick={() => { addStory() }} >Add story</Button>
                            <Button hidden id="btnEditStory" className="btn__save__edit" onClick={() => { editStory() }} >Edit story</Button>
                            <Button hidden id="btnSaveStory" className="btn__save__edit" onClick={() => { saveStory() }} >Save</Button>

                        </div>
                    </Col>
                    <Col span={24}>
                        <Row>
                            <Col span={24}>
                                <div className="component__detail__edit--addchap">
                                    <TextHeading>Edit & add chap</TextHeading>
                                </div>
                            </Col>
                        </Row>
                        <div className="component__detail__edit--choosechap">
                            <h3 className="component__detail__edit__content--title" style={{ display: 'block' }}>Select chap</h3>
                            <Select
                                id="inChap"
                                value={chapterIsCho}
                                onChange={nameChapter}
                                disabled={btnSelect}
                                className=" select__chap__edit"
                                placeholder={showIndexChap}
                                popupClassName='select__chap__edit--dropdown'
                                dropdownRender={(menu) => (
                                    <>
                                        {menu}
                                        <Input placeholder="Chapter index" id="id_chapter" className="input__name__book--input" type="number" min="0" onClick={nameChapter} onChange={event => setIndexChap(event.target.value)} />
                                        <Button
                                            id="btnInsertChap"
                                            type="text" icon={<PlusOutlined />}
                                            onClick={addItem}>
                                            Add Chap
                                        </Button>
                                    </>
                                )}
                            >
                                {items.map((items) => (
                                    <Option key={items.index}>{items.index}</Option>
                                ))}
                            </Select>
                            <br></br><br></br>
                            <h3 className="component__detail__edit__content--title">Name chap</h3>
                            <Input disabled={select} id="nStory" className="input__name__book--input" placeholder="Your chap name" value={nameChap} onChange={event => setNameChap(event.target.value)} />
                            <h3 className="component__detail__edit__content--title">Content</h3>
                            <TextArea disabled={select} className="component__detail__edit__content--detail component__detail__edit__content--content" value={content} allowClear onChange={event => setContent(event.target.value)} />
                        </div>
                        <div className="component__detail__edit__content--btn">
                            <Button hidden disabled={btnCancel} id="btnCancel" className="btn__cancel__edit" onClick={delChapter}>Delete</Button>
                            <Button hidden disabled={btnAdd} id="btnAdd" className="btn__save__add" onClick={addChapter}>Add</Button>
                            <Button hidden disabled={btnSave} id="btnSave" className="btn__save__edit" onClick={editChapter}>Save</Button>
                        </div>
                    </Col>
                </Row>
            </div>

            <style jsx>{`
                .component__detail__edit{
                    padding: 12px 8px;
                    position:relative;
                }

                .component__detail__edit__img,
                .upload__img__book{
                    width: 90%;
                    height: 310px;
                    overflow: hidden;
                    margin: 0 auto 12px;
                    position:relative;
                }

                .component__detail__edit__content{
                    font-weight: 550;
                    font-size: 14px;
                    line-height: 18px;
                    color: rgba(31, 30, 34, 0.7);
                    width:90%;
                    margin:0 auto 20px;
                }


                .component__detail__edit__information{
                    text-align: center;
                    font-weight: bolder;
                    font-size: 32px;
                    color: #1F1E22;
                    margin: 6px 0 12px;
                }

                .component__detail__edit__information--name{
                    margin:0;
                }
                
                .input__name__book{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1f1e22;
                    text-align: left;
                }

                .component__detail__edit__content--title{
                    font-weight: 600;
                    font-size: 16px;
                    line-height: 24px;
                    color: #1F1E22;
                    position:relative;
                    display: inline-block;
                    margin:12px 24px 4px 4px;
                }

                .component__detail__edit__content--icon{
                    font-size: 24px;
                    color: #FF8F5C;
                    height: 24px;
                    width: 24px;
                    cursor: pointer;
                }
                
                .icon__edit{
                    position: absolute;
                    bottom: 16px;
                    right: 12px;
                }

                .component__detail__edit--addchap{
                    float: left;
                    margin: 16px;
                }
                
                .component__detail__edit--choosechap{
                    width: 90%;
                    margin: 16px auto;
                }

                .component__detail__edit__content--btn{
                    display:flex;
                    width: 90%;
                    justify-content: flex-end;
                }

                .upload__img__book{
                    background: #FFFFFF;
                    box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25), 2px 2px 6px rgba(0, 0, 0, 0.25);
                    border-radius: 5px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 186px;
                    color: #FCE76C;
                    cursor: pointer;
                }

                @media  (max-width: 992px)and (min-width:577px){

                }
                @media  (max-width: 576px){

                    .component__detail__edit__content,
                    .component__detail__edit--choosechap{
                        width:100%
                    }
                }
            `}</style>

            <style jsx global>{`
                .component__detail__edit .component__detail__edit__information .component__detail__edit__information--rate{
                    font-size:20px
                }

                .component__detail__edit .component__detail__edit__content--detail{
                    font-weight: 550;
                    font-size: 14px;
                    color: rgba(31, 30, 34, 0.7);
                    height: 360px !important;
                    width:100%;
                    overflow-y: scroll;
                    letter-spacing: 0.05em;
                    margin:6px 0 12px;
                    padding:12px;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 5px 5px 10px rgb(0 0 0 / 25%);
                    border-radius: 10px;
                    border: none;
                }

                .component__detail__edit--choosechap .component__detail__edit__content--content{
                    width: 90%;
                    height: 300px !important;
                }

                .component__detail__edit .ant-input-affix-wrapper:focus, 
                .component__detail__edit  .ant-input-affix-wrapper-focused{
                    box-shadow: unset;
                    border-radius: 10px;
                    border: none !important;
                }

                .component__detail__edit .select__chap__edit{
                    height: 48px;
                    width: 90%;
                }

                .component__detail__edit .select__chap__edit > .ant-select-selector{
                    height: 48px;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 1px 2px 4px rgb(0 0 0 / 25%);
                    border-radius: 10px;
                    border: none;
                }

                .component__detail__edit .select__chap__edit .ant-select-selection-item{
                    line-height: 48px;
                    font-size: 18px;
                    font-weight: 530;
                    text-transform: capitalize;
                }

                .component__detail__edit  .input__name__book--input{
                    height: 48px;
                    background: #fff;
                    -webkit-box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 1px 2px 4px rgb(0 0 0 / 25%);
                    -moz-box-shadow: 0px 0px 4px 1px rgb(0 0 0/25%),inset 1px 2px 4px rgb(0 0 0/25%);
                    box-shadow: 0px 0px 4px 1px rgb(0 0 0 / 25%), inset 1px 2px 4px rgb(0 0 0 / 25%);
                    -webkit-border-radius: 10px;
                    -moz-border-radius: 10px;
                    border-radius: 10px;
                    border: none;
                    font-size: 14px;
                    font-weight: 530;
                    margin-bottom: 16px;
                }

                .component__detail__edit .input__number__chap{
                    margin: 16px;
                    font-size: 20px;
                    color: #ff8f5c;
                }
                
                .component__detail__edit .input__number__chap input{
                    font-weight: bolder;

                }

                .component__detail__edit .ant-select-single .ant-select-selector .ant-select-selection-placeholder,
                .component__detail__edit .ant-select-selection-search-input{
                    line-height: 48px;
                    text-transform: capitalize;
                    font-size:14px;
                    height:48px !important;
                }

                .select__chap__edit--dropdown .ant-select-item-option{
                    padding: 4px 24px;
                    font-weight: 530;
                    text-transform: capitalize;
                    font-size: 16px;
                }

                .select__chap__edit--dropdown .ant-input{
                    width: 70%;
                    margin: 4px 16px;
                    height: 42px;
                    border-radius: 15px;
                    font-size: 16px;
                    font-weight: 530;
                }

                .select__chap__edit--dropdown  .ant-btn-text{
                    height: 42px;
                    width: 20%;
                    min-width:92px;
                    border: 1px solid #8BD0FC;
                    border-radius: 15px;
                    font-size: 16px;
                    font-weight: 600;
                    color: #8BD0FC;
                }

                .component__detail__edit--choosechap .ant-select-suffix{
                    font-size: 20px;
                    color: #FF8F5C;
                }

                .component__detail__edit .component__detail__edit__content--btn .btn__cancel__edit,
                .component__detail__edit .component__detail__edit__content--btn .btn__save__edit{
                    height: 36px;
                    width: 113px;
                    background: #FFFFFF;
                    border: 1px solid #E75C62;
                    box-shadow: 2px 4px 4px rgb(0 0 0 / 25%);
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 16px;
                    color: #E75C62;
                    margin: 12px 24px;
                }
                

                .component__detail__edit .component__detail__edit__content--btn .btn__save__edit{
                    background: #8BD0FC;
                    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 20px;
                    color:#fff;
                    border:none;
                }

                .component__detail__edit .component__detail__edit__content--btn .btn__cancel__add,
                .component__detail__edit .component__detail__edit__content--btn .btn__save__add{
                    height: 36px;
                    width: 113px;
                    background: #FFFFFF;
                    border: 1px solid #E75C62;
                    box-shadow: 2px 4px 4px rgb(0 0 0 / 25%);
                    border-radius: 20px;
                    font-weight: 700;
                    font-size: 16px;
                    color: #E75C62;
                    margin: 12px 24px;
                }
                .component__detail__edit .component__detail__edit__content--btn .btn__save__add{
                    background: #00ff1f;
                    box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.25);
                    border-radius: 20px;
                    color:#fff;
                    border:none;
                }      
            `}</style>
        </div>
    )
}