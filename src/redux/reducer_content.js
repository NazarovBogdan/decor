import {Redirect } from 'react-router-dom';
import {setText, changeTitleText, changeDescText, setStagesText, 
    changeStageTitleText, changeStageDescText, setAdmin, 
    changeImg, setImg, getMail, setSliderImg, changeSliderImg, getMailComm} from '../api/api'

const SET_CONTENT = "SET_CONTENT";
const SET_STAGES = "SET_STAGES";
const SET_LOGIN = "SET_LOGIN";
const SET_IMG = "SET_IMG";
const SET_SLIDER_IMG = "SET_SLIDER_IMG";


let initialState = {

    content: [
        {id: 1, title:"ДИЗАЙН ИНТЕРЬЕРА", description: "Создаю функциональные и уникальные пространства" },
        {id: 2, title:"О нас", description: "Текст текст текст текcт текст текст текст текс тек..." },
        {id: 3, title:"9", description: "Дизайн-проектов за 2020 год" },
        {id: 4, title:"968", description: "Готовых м за 2020 год" },
        {id: 5, title:"37", description: "Счастливых клиентов" },
        {id: 6, title:"Анастасия Анастасия", description: "Суеверные люди первой в свой дом впускают кошку, а..." },
        {id: 7, title:"Этапы разработки дизайн-проекта", description: "" },
        {id: 8, title:"Цены на услуги", description: "" },
        {id: 9, title:"ПРОЕКТИРОВАНИЕ", description: "2000" },
        {id: 10, title:"АВТОРСКИЙ НАДЗОР", description: "2000" },
        {id: 11, title:"РЕМОНТНЫЕ РАБОТЫ", description: "10000" },
        {id: 12, title:"— Несколько планировачных решений", description: "" },
        {id: 13, title:"— Техническая документация", description: "" },
        {id: 14, title:"— 3D визуализация", description: "" },
        {id: 15, title:"— Несколько планировачных решений", description: "" },
        {id: 16, title:"— Техническая документация", description: "" },
        {id: 17, title:"— 3D визуализация", description: "" },
        {id: 18, title:"— Несколько планировачных решений", description: "" },
        {id: 19, title:"— Техническая документация", description: "" },
        {id: 20, title:"— 3D визуализация", description: "" },
        {id: 21, title:"Имя", description: "Анастасия Анастасия" },
        {id: 22, title:"Адрес", description: "г.Краснодар, ул.Старокубанская 92, оф. 215" },
        {id: 23, title:"Телефон", description: "+7 999 99 99" },
        {id: 24, title:"Почта", description: "pavlova.decorator@gmail.com" },
        {id: 25, title:"Facebook", description: "#" },
        {id: 26, title:"WatsApp", description: "#" },
        {id: 27, title:"Instagram", description: "#" },
        {id: 28, title:"Instagram", description: "#" },
        {id: 28, title:"Instagram", description: "#" }
    ],

    stages: [
        {id: 1, stagesNumber: "01", title: "СБОР ИНФОРМАЦИИ", description: "Узнаём, что вы любите, как живёте, о чём мечтаете. Делаем замер и изучаем требования УК к ремонтно-строительным"},
        {id: 2, stagesNumber: "02", title: "УТВЕРЖДЕНИЕ КОНЦЕПЦИИ", description: "Узнаём, что вы любите, как живёте, о чём мечтаете. Делаем замер и изучаем требования УК "},
        {id: 3, stagesNumber: "03", title: "СОЗДАНИЕ ДИЗАЙН-ПРОЕКТА", description: "Узнаём, что вы любите, как живёте, о чём мечтаете. Делаем замер и изучаем требования УК "},
        {id: 4, stagesNumber: "04", title: "ПЛАН ЗАКУПОК", description: "Узнаём, что вы любите, как живёте, о чём мечтаете. Делаем замер и изучаем "},
        {id: 5, stagesNumber: "05", title: "СТРОИТЕЛЬНЫЕ РАБОТЫ", description: "Узнаём, что вы любите, как живёте, о чём мечтаете. Делаем"},
        {id: 6, stagesNumber: "06", title: "ДЕКОРИРОВАНИЕ", description: "Узнаём, что вы любите, как живёте, о чём мечтаете. Делаем"},
        {id: 7, stagesNumber: "07", title: "НОВОСЕЛЬЕ", description: "Узнаём, что вы любите, как живёте, о чём мечтаете. Делаем"}
    ],

    images: [
        {id:1 , image: ""},
        {id:2 , image: ""},
        {id:3, image: ""},
        {id:4 , image: ""},
        {id:5 , image: ""},
    ],

    slider_images: [
        {id:1 , image: ""},
        {id:2 , image: ""},
        {id:3, image: ""},
        {id:4 , image: ""},
    ],

    login: false
}

let reducerRecordings = (state = initialState, action) => {
    switch(action.type){
        case SET_CONTENT: {
            return { ... state, content: action.setContent};
        }  
        case SET_STAGES: {
            return { ... state, stages: action.setContent};
        } 
        case SET_LOGIN: {
            return { ... state, login: true};
        }
        case SET_IMG: {
            return { ... state, images: action.images};
        }  
        case SET_SLIDER_IMG: {
            return { ... state, slider_images: action.images};
        }  
        default:  
            return state;      
    }
    
}

export const set_content = (setContent) => {
    return {
        type: SET_CONTENT, setContent
    }
}

export const set_login = () => {
    return {
        type: SET_LOGIN
    }
}

export const set_img = (images) => {
    return {
        type: SET_IMG, images
    }
}
export const set_slider_img = (images) => {
    return {
        type: SET_SLIDER_IMG, images
    }
}

export const set_stages = (setContent) => {
    return {
        type: SET_STAGES, setContent
    }
}

export const setContentThunk = () =>{
    return (dispatch) => {
        setText()
            .then(data => {
                dispatch(set_content(data))
            })
        
    }
}

export const setImagesThunk = () =>{
    return (dispatch) => {
        setImg()
            .then(data => {
                dispatch(set_img(data))
            })
        
    }
}

export const setSliderImagesThunk = () =>{
    return (dispatch) => {
        setSliderImg()
            .then(data => {
                dispatch(set_slider_img(data))
            })
        
    }
}

export const changeTitleThunk = (data) =>{
    return () => {
        changeTitleText(data);
        alert("запись измененна");
    }
}

export const changeDescThunk = (data) =>{
    return () => {
        changeDescText(data);
        alert("запись измененна");
    }
}

export const setStagesThunk = () =>{
    return (dispatch) => {
        setStagesText()
            .then(data => {
                dispatch(set_stages(data))
            })
        
    }
}

export const changeStageTitleThunk = (data) =>{
    return () => {
        changeStageTitleText(data);
        alert("запись измененна");
    }
}

export const changeStageDescThunk = (data) =>{
    return () => {
        changeStageDescText(data);
        alert("запись измененна");
    }
}

export const setAdminThunk = data =>{
    return (dispatch) => {
        setAdmin(data)
            .then(data => {
                if(data === 1) {
                    dispatch(set_login())
                    return <Redirect from="/adminmodal" to="/admin"/>
                } else {
                    alert("Неправильный логин или пароль");
                }
            })
        
    }
}

export const changeImgThunk = (data) =>{
    return () => {
        changeImg(data).then(response=> {
            alert("Картинка измененна");
        });
    }
}

export const changeSliderImgThunk = (data) =>{
    return () => {
        changeSliderImg(data).then(response=> {
            alert("Картинка измененна");
        });
    }
}

export const getMailThunk = (data) =>{
    return () => {
        getMail(data).then(response=> {
            alert("Заявка отправленна");
        });
    }
}

export const getMailCommThunk = (data) =>{
    return () => {
        getMailComm(data).then(response=> {
            alert("Комментарий отправленн");
        });
    }
}

export default reducerRecordings;