import { 
    JsonController, Get, Param, Put, Body, NotFoundError, 
    Post, HttpCode, Delete, Authorized
  } from 'routing-controllers'
import Text from './entity'

@JsonController()
export default class TextController {

    // @Authorized()
    @Get('/texts')
    @HttpCode(200)
    async allTexts() {

        return await Text.find()  
    }
    
    // @Authorized()
    @Get('/texts/:id')
    @HttpCode(200)
    getText(
    @Param('id') id: number) {
        return Text.findOneById(id)
    }

    // @Authorized()
    @Put('/texts/:id')
    async updateText(
    @Param('id') id: number,
    @Body() update: Partial<Text>) {
        const text = await Text.findOneById(id)
        if (!text) throw new NotFoundError('Cannot find text')

        return Text.merge(text, update).save()
    }

    // @Authorized()
    @Post('/texts')
    @HttpCode(201)
    async addText(
    @Body() text: Text) {
        
        return text.save()
    }

    @Authorized()
    @Delete('/texts/:id')
    async deleteText(
    @Param('id') id: number) {
        const text = await Text.findOneById(id)
        if (!text) throw new NotFoundError('Cannot find text')
        return Text.remove(text)
    }
    
}