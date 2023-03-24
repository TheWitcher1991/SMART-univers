import { GLOBAL } from '../utils/config.js'

class mapController {

    static render (request, response) {
        response.render(GLOBAL.ROUTES.map.path, {
            title: 'СтГАУ Навигатор',
            stylePath: GLOBAL.STYLE_PATH
        })
    }

}

export default mapController