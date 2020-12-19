import React,{useState} from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import ImageUploader from '../ImageUploader'
function Forms({cardList,setCardList}) {
    const [file , setFile] = useState(null)
    const submitForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const formatedValues = {
            title: data.get('title'),
            subTitle: data.get('subTitle'),
            description: data.get('description'),
            file: file
          };
          setCardList((list) => [...list, formatedValues])
      }
    return (
        <div>
            <h2>KART EKLE</h2>
            <Form onSubmit={submitForm}>
                <FormGroup>
                    <Label>Kart Başlığı</Label>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Kart Başlığı Giriniz..."
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Kart Alt Başlığı</Label>
                    <Input
                        type="text"
                        name="subTitle"
                        id="subTitle"
                        placeholder="Kart Alt Başlığı Giriniz..."
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Açıklama</Label>
                    <Input
                        type="textarea"
                        rows="4"
                        name="description"
                        id="description"
                        placeholder="Açıklama Giriniz..."
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Resim Seçiniz</Label>
                    <ImageUploader setFile={(file)=>setFile(file)} file={file}/>
                </FormGroup>
                <Button type="Submit" color="primary" className="mt-3" >Ekle</Button>
            </Form>
        </div>
    );
}

export default Forms;
