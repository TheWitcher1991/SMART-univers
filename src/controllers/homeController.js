import fs from 'fs'
import request from 'request'
import { GLOBAL } from '../utils/config.js'

class homeController {
    
    static getGroup() {
        return JSON.parse(fs.readFileSync('./db/group.json'))
    }
    
    static messageBox(type, ...args) {
        
        if (type === 'error') {
            console.log(args['text'])
        }
        
    }
    
    static ajax (options) {
        return request.get({
            options
        }, (err, res, data) => {
            if (!err && res.statusCode === 200) {
                return {
                    fail: false,
                    data: JSON.parse(data)
                }
            } else {
               return {
                   fail: false, 
                   data: err
               }
            }
        })
    }
    
    static render (request, response) {
        
        let ctx = homeController.ajax({
            url: GLOBAL.REQUEST_URL,
            json: true,
            headers: {'User-Agent': 'request'}
        })
        
        ctx.fail = true
        
        let group = homeController.getGroup()
        
        response.render(GLOBAL.ROUTES.index.path, {
            title: 'СтГАУ Навигатор',
            stylePath: GLOBAL.STYLE_PATH,
            styleIcons: GLOBAL.STYLE_ICONS,
            fail: ctx.fail,
            group: group.number,
        })
        
    }
    
}

export default homeController