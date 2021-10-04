import "./Account.css";

import profileAvatar from "../../images/person-4.jpg";
import profileCup from "../../images/profile-cup.svg";
import SidebarTableFilter from "../SidebarTableFilter";
import SidebarBlockFilter from "../SidebarBlockFilter";
import UserItem from "../UserItem";

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
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                  <UserItem />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Account;