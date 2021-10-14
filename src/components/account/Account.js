import "./Account.css";

import profileAvatar from "../../images/person-4.jpg";
import profileCup from "../../images/profile-cup.svg";
import registCard_img_1 from "../../images/registCard-img-1.jpg";
import registCard_logo_1 from "../../images/registCard-logo-1.jpg";
import registCard_avatar_1 from "../../images/registCard-avatar-1.jpg";
import clubImage_1 from "../../images/club-1.jpg";

import SidebarTableFilter from "../SidebarTableFilter";
import SidebarBlockFilter from "../SidebarBlockFilter";
import UserItem from "../UserItem";
import UserCard from "../UserCard";
import RegistCard from "../RegistCard";
import Button from "../Button";
import CardProgress from "../CardProgress";
import ClubCard from "../ClubCard";

import card_progress_1 from '../../images/card-progress-1.svg';

function Account(){
  return (
    <main className="main">
      <section className="profile">
        <div className="profile__content page__spacing page__spacing_type_account">
          <div className="profile__block-avatar">
            <img className="profile__avatar" alt="Аватар пользователя" src={profileAvatar} />
            <button className="profile__edition btn btn_active btn_type_profile">Редактировать</button>
          </div>
          <div className="profile__block-info">
            <h2 className="profile__name">Каневский Павел Владимирович</h2>
            <div className="profile__block-about">
              <ul className="profile__list-key">
                <li className="profile__key">Организация:</li>
                <li className="profile__key">Должность:</li>
                <li className="profile__key">Телефон:</li>
                <li className="profile__key">Группа:</li>
                <li className="profile__key">Почта:</li>
                <li className="profile__key">Зачетка:</li>
              </ul>
              <ul className="profile__list-value">
                <li className="profile__value">Бит медиа</li>
                <li className="profile__value">Директор</li>
                <li className="profile__value">8 (925) 184 42 08</li>
                <li className="profile__value">МТ9-41</li>
                <li className="profile__value">kanevich@bmstu.ru</li>
                <li className="profile__value">134975198</li>
              </ul>
            </div>
          </div>
          <div className="profile__activity">
            <div className="profile__block-rating">
              <div className="profile__content-rating">
                <div className="profile__rating">
                  <p className="profile__rating-now">96</p>
                  <p className="profile__rating-max">300</p>
                </div>
                <p className="profile__rating-text">баллов</p>
              </div>
              <img className="profile__cup" alt="кубок" src={profileCup} />
            </div>
            <div className="profile__block-list">
              <ul className="profile__list-key">
                <li className="profile__key">Мероприятий:</li>
                <li className="profile__key">Выездов:</li>
              </ul>
              <ul className="profile__list-value">
                <li className="profile__value">10/20</li>
                <li className="profile__value">5/8</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="rating-table">
        <div className="rating-table__content page__spacing page__spacing_type_account">
          <div className="rating-table__block-title">
            <h2 className="rating-table__title">Рейтинговая таблица</h2>
            <div className="search">
              <span className="search__icon"></span>
              <input className="search__input" placeholder="Введите пользователя"></input>
            </div>
          </div>
          <div className="rating-table__block-table">
            <SidebarTableFilter>
              <SidebarBlockFilter values={['2021 (осень)', '2021 (весна)', '2018' ]}/>
              <SidebarBlockFilter values={['Лидеры', 'Где я']} style={{marginTop: 53}}/>
            </SidebarTableFilter>
            <div className="rating-table__inside">
              <ul className="rating-table__column">
                <li className="rating-table__column-name">Место</li>
                <li className="rating-table__column-name">Имя</li>
                <li className="rating-table__column-name">Группа</li>
                <li className="rating-table__column-name">Сумма баллов</li>
                <li className="rating-table__column-name">Прогресс</li>
              </ul>
              <div className="rating-table__main">
                <ul className="rating-table__list">
                  <UserItem>
                    <UserCard name="Марьяна Соловьева" srcImg={registCard_avatar_1} selector="user-item__item"/>
                  </UserItem>
                  <UserItem>
                    <UserCard name="Марьяна Соловьева" srcImg={registCard_avatar_1} selector="user-item__item"/>
                  </UserItem>
                  <UserItem>
                    <UserCard name="Марьяна Соловьева" srcImg={registCard_avatar_1} selector="user-item__item"/>
                  </UserItem>
                  <UserItem>
                    <UserCard name="Марьяна Соловьева" srcImg={registCard_avatar_1} selector="user-item__item"/>
                  </UserItem>
                  <UserItem>
                    <UserCard name="Марьяна Соловьева" srcImg={registCard_avatar_1} selector="user-item__item"/>
                  </UserItem>
                  <UserItem>
                    <UserCard name="Марьяна Соловьева" srcImg={registCard_avatar_1} selector="user-item__item"/>
                  </UserItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="registEvents">
        <div className="registEvents__content page__spacing page__spacing_type_account">
          <h2 className="main__title">Мероприятия и выезды</h2>
          <ul className="registEvents__list">
            <RegistCard data = {{
              imageEvent: registCard_img_1,
              date: '23-24.09',
              venue: 'Ступино',
              isEditing: true,
              title: 'Выезд первого курса',
              imageOrganization: registCard_logo_1,
              nameUserOrg: 'Диана Андреева',
              imageUserOrg: registCard_avatar_1,
              stateNomer: 1
            }}/>
            <RegistCard data = {{
              imageEvent: registCard_img_1,
              date: '2022.03.14',
              venue: 'Москва',
              isEditing: false,
              title: 'Выезд 7 курса',
              imageOrganization: registCard_logo_1,
              nameUserOrg: 'Ванька Встанька',
              imageUserOrg: registCard_avatar_1,
              stateNomer: 2
            }}/>
            <RegistCard data = {{
              imageEvent: registCard_img_1,
              date: '2022.03.14',
              venue: 'Москва',
              isEditing: false,
              title: 'Выезд 7 курса',
              imageOrganization: registCard_logo_1,
              nameUserOrg: 'Ванька Встанька',
              imageUserOrg: registCard_avatar_1,
              stateNomer: 3
            }}/>
            <RegistCard data = {{
              imageEvent: registCard_img_1,
              date: '2022.03.14',
              venue: 'Москва',
              isEditing: false,
              title: 'Выезд 7 курса',
              imageOrganization: registCard_logo_1,
              nameUserOrg: 'Ванька Встанька',
              imageUserOrg: registCard_avatar_1,
              stateNomer: 4
            }}/>
            <RegistCard data = {{
              imageEvent: registCard_img_1,
              date: '2022.03.14',
              venue: 'Москва',
              isEditing: false,
              title: 'Выезд 7 курса',
              imageOrganization: registCard_logo_1,
              nameUserOrg: 'Ванька Встанька',
              imageUserOrg: registCard_avatar_1,
              stateNomer: 5
            }}/>
            <RegistCard data = {{
              imageEvent: registCard_img_1,
              date: '2022.03.14',
              venue: 'Москва',
              isEditing: false,
              title: 'Выезд 7 курса',
              imageOrganization: registCard_logo_1,
              nameUserOrg: 'Ванька Встанька',
              imageUserOrg: registCard_avatar_1,
              stateNomer: 6
            }}/>
          </ul>
          <Button name="Архив" selectors="btn_active btn_type_lite" style={{marginTop: 24}}/>
        </div>
      </section>
      <section className="clubs">
        <div className="clubs__content page__spacing page__spacing_type_account">
          <h2 className="main__title">Клубы</h2>
          <ul className="clubs__list">
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская',
              stateNomer: 2,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская asd fefsdfs',
              stateNomer: 3,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская',
              stateNomer: 2,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская asd fefsdfs',
              stateNomer: 3,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская',
              stateNomer: 2,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская asd fefsdfs',
              stateNomer: 3,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская',
              stateNomer: 2,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская asd fefsdfs',
              stateNomer: 3,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская',
              stateNomer: 2,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская asd fefsdfs',
              stateNomer: 3,
            }}/>
            <ClubCard data={{
              clubImage: clubImage_1,
              title: 'Бауманская',
              stateNomer: 2,
            }}/>
          </ul>
          <Button name="Больше" selectors="btn_active btn_type_lite" style={{marginTop: 0}}/>
        </div>
      </section>
      <section className="feedback">
        <div className="form page__spacing page__spacing_type_account">
          <h2 className="main__title">Обратная связь</h2>
          <form action="#" id="form" className="form__feedback">
            <div className="form__item">
              <div className="form__label">Тема сообщения</div>
              <input type="text" id="formSubject" name="subject" className="form__input form__input_type_subject"></input>
            </div>
            <div className="form__item">
              <div className="form__label">Сообщение</div>
              <textarea id="formMessage" name="message" className="form__input form__input_type_textarea"></textarea>
            </div>
            <div className="form__item">
              <div className="file">
                <div className="file__item">
                  <input id="formImage" className="file__input" type="file" name="image" accept=".jpg, .png, .gif"></input>
                  <div className="file__button"></div>
                </div>
                <div className="file__preview"></div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Account;