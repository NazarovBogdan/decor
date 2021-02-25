import * as axios from 'axios';

const instanse = axios.create({
    baseURL: "http://landing.pavlova-decorator.ru/backend/contentText/"
})

export const setText = () => {
    return instanse.get(`set_content.php`)
    .then(response => {
        return response.data
        
    })
}

export const getMail = (params) => {
    return instanse({
        method: 'post',
        url: 'get_mail.php',
        data: params
    })
}

export const getMailComm = (params) => {
    console.log(params);
    return instanse({
        method: 'post',
        url: 'get_mail_comm.php',
        data: params
    })
}

export const changeTitleText = (params) => {
    return instanse({
        method: 'post',
        url: 'change_title.php',
        data: params
    })
}

export const changeDescText = (params) => {
    return instanse({
        method: 'post',
        url: 'change_desc.php',
        data: params
    })
}

export const setStagesText = () => {
    return instanse.get(`set_stagesofwork.php`)
    .then(response => {
        return response.data
    })
}

export const changeStageTitleText = (params) => {
    return instanse({
        method: 'post',
        url: 'change_Stagetitle.php',
        data: params
    })
}

export const changeStageDescText = (params) => {
    return instanse({
        method: 'post',
        url: 'change_Stagedesc.php',
        data: params
    })
}

export const setAdmin = (params) => {
    return instanse({
        method: 'post',
        url: 'set_admin.php',
        data: params
    }).then(response => {
        return response.data
    })
}

export const setImg = () => {
    return instanse.get(`set_img.php`)
    .then(response => {
        return response.data
        
    })
}

export const setSliderImg = () => {
    return instanse.get(`set_slider.php`)
    .then(response => {
        return response.data
        
    })
}

export const changeImg = (params) => {
    return instanse({
        method: 'post',
        url: 'change_img.php',
        data: params,
        headers: {
            'cache': false,
            'Content-Type' : false,
            'processData': false
        },
    })
}

export const changeSliderImg = (params) => {
    return instanse({
        method: 'post',
        url: 'change_slider_img.php',
        data: params,
        headers: {
            'cache': false,
            'Content-Type' : false,
            'processData': false
        },
    })
}



