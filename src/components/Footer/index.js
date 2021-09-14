import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";

const Footer = () => {
    return (
       <div className="bg-dark text-light">
           <div className="container">
               <div className="d-flex align-items-center justify-content-between ">
                   <div className="col-md-8 col-sm-8 my-5">
                       <p>Использование и перепечатка материалов Spletnik возможны только с письменного разрешения редакции
                           и при наличии активной ссылки на источник.

                           Сайт может содержать материалы, предназначенные для лиц, достигших 16-летнего возраста.

                           Внимание! На сайте не разрешается размещать фото, видео или иной контент, если Вы не имеете на это
                           необходимых прав и/или согласия правообладателя. Перед регистрацией рекомендуем внимательно
                           ознакомиться с пользовательским соглашением.
                       </p>
                   </div>
                   <div className="col-md-4 col-sm-4">
                       <h5>ПОДПИШИСЬ НА НАШ ДАЙДЖЕСТ</h5>
                       <InputGroup className="mb-3">
                           <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                           <FormControl
                               placeholder="Ваш e-mail"
                               aria-label="Username"
                               aria-describedby="basic-addon1"
                           />
                       </InputGroup>
                   </div>
               </div>
                  <ul className="footer-nav d-flex align-items-center justify-content-between">
                      <li className="me-4"><a href="#">О ПРОЕКТЕ</a></li>
                      <li className="me-4"><a href="#">КОНТАКТЫ</a></li>
                      <li className="me-4"><a href="#">ВАКАНСИИ</a></li>
                      <li className="me-4"><a href="#">РЕКЛАМА</a></li>
                      <li className="me-4"><a href="#">ПРАВИЛА МОДЕРАЦИИ</a></li>
                      <li className="me-4"><a href="#">ДЛЯ ПРАВОБЛАДАТЕЛЯ</a></li>
                  </ul>
           </div>
       </div>
    );
};

export default Footer;