const btnMoreSpoiler = '.btn_type_section';//селектор кнопки спойлера
const spoilerSection = '.organizations__spoiler-list';//селектор спойлера

const communitiesSection = document.querySelector('.communities');//элемент секции с сообществом
const eventsSection = document.querySelector('.events');//элемент секции с мероприятиями
const departuresSection = document.querySelector('.departures');//элемент секции с выездами
const teamSection = document.querySelector('.team');//элемент секции с командой

//определение элементов спойлеров внутри этих секций
const communitiesSpoiler = communitiesSection.querySelector(spoilerSection);
const eventsSpoiler = eventsSection.querySelector(spoilerSection);
const departuresSpoiler = departuresSection.querySelector(spoilerSection);
const teamSpoiler = teamSection.querySelector(spoilerSection);

//инициализация событий при нажатии на кнопку btnMoreSpoiler
communitiesSection.querySelector(btnMoreSpoiler).addEventListener('click', () => openSpoiler(communitiesSection));
eventsSection.querySelector(btnMoreSpoiler).addEventListener('click', () => openSpoiler(eventsSection));
departuresSection.querySelector(btnMoreSpoiler).addEventListener('click', () => openSpoiler(departuresSection));
teamSection.querySelector(btnMoreSpoiler).addEventListener('click', () => openSpoiler(teamSection));

function openSpoiler(selectorSection){
  console.log('ok');
  const btnMore = selectorSection.querySelector(btnMoreSpoiler);
  
  selectorSection.querySelector(spoilerSection).classList.add('organizations__spoiler-list_active');
  
  btnMore.classList.add('btn_disabled');
  btnMore.classList.remove('btn_active');
  btnMore.setAttribute('disabled', true);
}