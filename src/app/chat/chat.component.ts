import { Component } from '@angular/core';
import { VertexAiService } from '../services/vertexai.service';
import { OpenAiService } from '../services/openai.service';

interface Message {
  sender: string;
  text: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [];
  topic: string = '';
  //topic: string = "Why humans cause pollution?";
  // topic: string = "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available."
  maxCount: number = 5

  constructor(private vertexAiService: VertexAiService, private openAiService: OpenAiService) {
    this.openAiService.setHistort(
      [{ "role": "system", "content": "Let's engage in an activity where we initiate a conversation about a topic.\nThe rule of the game is that, for each statement, you must respond with your opinion and a question or seek my opinion to keep the conversation flowing." }]
    )
    this.vertexAiService.startSession() //temp

  }

  async startConverstaion() {
    // let firstResponse = await this.sendMessageForA(`Topic is ${this.topic}`)
    // console.log(firstResponse.message)
    let openAiInput = `Topic is ${this.topic}`
    for (let i = 0; i <= this.maxCount; i++) {
      try{
        await new Promise((resolve) => setTimeout(resolve, 2300));
        let openAiResponse
        let vertexAiInput
        let vertexAiResponse
        openAiResponse = await this.openAiService.makeRequest(openAiInput)
        this.openAiService.setHistort(openAiResponse.history)
        vertexAiInput = openAiResponse.message
        this.addToChat("A",vertexAiInput)

        await new Promise((resolve) => setTimeout(resolve, 5000));

        vertexAiResponse = await this.vertexAiService.makeRequest(vertexAiInput)
        openAiInput =  vertexAiResponse.response
        this.addToChat("B",openAiInput)
      }
      catch(error){
        console.error("Error During conversation",error)
      }
    }
      


    }



  addToChat(sender: string, message: string) {
    if (message.trim() !== '') {
      // let chatIndex = this.messages.length
      // console.log("Array length",chatIndex)
      // // chatIndex = chatIndex <= 1 ? chatIndex -1 : chatIndex
      // console.log("ChatIndex",chatIndex)
      // let messageChar=''
      // for (let i=0;i<message.length;i++){
      //   messageChar=messageChar+message[i]
      //   // console.log(`${chatIndex},${messageChar}`)
      //   setTimeout(
      //     () =>{
      //   this.messages[chatIndex] = { "sender": sender, text: messageChar }}
      //   ,1000)
      // }
       this.messages.push({ "sender": sender, text: message });
    }
  }
}