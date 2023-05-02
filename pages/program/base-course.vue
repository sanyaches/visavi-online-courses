<template>
  <div class="program-page">
    <ReachOutModal />

    <div class="promo-container">
      <div class="program-page__promo">
        <div class="program-page__promo-background">
          <img class="program-page__thumbnail is-desktop" src="@/assets/images/education-wide3.jpg">
          <img class="program-page__thumbnail is-mobile" src="@/assets/images/education-wide3mobile.jpg">
        </div>
        <div class="program-page__promo-content">
          <div class="program-page__promo-content-background">
            <b-container>
              <div class="program-page__promo-text">
                <div class="program-page__promo-header">
                  <div>
                    <h1 class="program-page__title">
                      <span>{{ $t('program.base_course.title') }}</span>
                    </h1>
                    <p>
                      Самые главные основы работы с волосами, только актуальные причёски, индивидуальная обратная связь, объемный практический и теоретический блок
                    </p>
                  </div>
                  <b-button class="button button--brown-dark button button--large">
                    {{ $t('program.common.buy') }}
                  </b-button>
                </div>
                <div class="program-page__benefits">
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-clock" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      {{ $t('program.common.duration') }}
                      <br>
                      {{ $t('program.base_course.duration') }}
                    </div>
                  </div>
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-hand-holding-heart" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      <span>{{ $t('program.common.treatment') }}</span>
                    </div>
                  </div>
                  <div class="program-page__benefit">
                    <font-awesome-icon icon="fa-solid fa-scroll" class="program-page__benefit-icon" />
                    <div class="program-page__benefit-text">
                      <span>{{ $t('program.common.give_certificate') }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </b-container>
          </div>
        </div>
      </div>
    </div>

    <div class="about">
      <b-container>
        <div class="about__header">
          <h2 class="about__title">
            {{ $t('program.base_course.about_title') }}
          </h2>
        </div>

        <div class="about__list">
          <div class="about__list-item">
            <div class="about__list-item-number">
              01
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('program.base_course.about.item_1.title') }}
              </h3>
              <p>{{ $t('program.base_course.about.item_1.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              02
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('program.base_course.about.item_2.title') }}
              </h3>
              <p>{{ $t('program.base_course.about.item_2.description') }}</p>
            </div>
          </div>
          <div class="about__list-item">
            <div class="about__list-item-number">
              03
            </div>
            <div class="about__list-item-content">
              <h3 class="about__list-item-title">
                {{ $t('program.base_course.about.item_3.title') }}
              </h3>
              <p>{{ $t('program.base_course.about.item_3.description') }}</p>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <div class="program">
      <b-container>
        <div class="program__header">
          <h2 class="program__title">
            {{ $t('program.base_course.program_title') }} <br>
            <small>{{ $t('program.common.program_hint') }}</small>
          </h2>
        </div>
        <div class="program__cards">
          <ssr-carousel
            show-arrows
            show-dots
            loop
            paginate-by-slide
            :slides-per-page="1"
          >
            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День первый
                </div>
                <hr>
                <div class="program__day-box">
                  <div class="program__day-card-image">
                    <img src="@/assets/images/photo1.jpg">
                  </div>
                  <div>
                    <div class="program__day-card-list-title">
                      Теоретический блок
                    </div>
                    <ul class="program__day-card-list">
                      <li>Знакомство</li>
                      <li>Типы, виды и структура волос</li>
                      <li>Анализ и диагностика волос </li>
                      <li>Кейс стилиста. Расходные материалы, стайлинг, инструменты и его виды, минимальный и оптимальный набор средств</li>
                      <li>Подготовка волос к укладке</li>
                      <li>Секреты стойкости(фиксация невидимок и нанесение стайлинга)</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Демонстрация (показ на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Стойкая подвижная голливудская волна на плойку</li>
                      <li>Правильный прикорневой начес</li>
                      <li>Трансформация в низкий голливудский хвост</li>
                      <li>Трансформация в низкий голливудский хвост</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Отработка ученика (отработка на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Постановка руки и работа с плойкой</li>
                      <li>Стойкая подвижная голливудская волна на плойку</li>
                      <li>Правильный прикорневой начес</li>
                      <li>Трансформация в низкий голливудский хвост</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День второй
                </div>
                <hr>
                <div class="program__day-box">
                  <div class="program__day-card-image">
                    <img src="@/assets/images/photo2.jpg">
                  </div>
                  <div>
                    <div class="program__day-card-list-title">
                      Теоретический блок
                    </div>
                    <ul class="program__day-card-list">
                      <li>Формы лица и особенности выбора укладки </li>
                      <li>Оформление зоны у лица</li>
                      <li>Зонирование головы. Как не завалить форму причёски </li>
                      <li>Формы и объемы в причёсках </li>
                      <li>Топ 10 ошибок при накрутке и как их избежать </li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Демонстрация (показ на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Текстурные локоны на утюг</li>
                      <li>Прикорневой объем на утюг</li>
                      <li>Трансформация в низкий хвост</li>
                      <li>Трансформация в низкий пучок</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Отработка ученика (отработка на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Постановка руки и работа с плойкой</li>
                      <li>Текстурные локоны на утюг</li>
                      <li>Прикорневой объем на утюг </li>
                      <li>Трансформация в низкий хвост</li>
                      <li>Трансформация в низкий пучок</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День третий
                </div>
                <hr>
                <div class="program__day-box">
                  <div class="program__day-card-image">
                    <img src="@/assets/images/photo3.jpg">
                  </div>
                  <div>
                    <div class="program__day-card-list-title">
                      Теоретический блок
                    </div>
                    <ul class="program__day-card-list">
                      <li>Упаковка профиля в соц сетях</li>
                      <li>Правила съемки, создание фото и видео </li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Демонстрация (показ на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Прикорневой объем на фен</li>
                      <li>Воздушные локоны на плойку</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Отработка ученика (отработка на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Прикорневой объем на фен</li>
                      <li>Воздушные локоны на плойку</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День четвертый
                </div>
                <hr>
                <div class="program__day-box">
                  <div class="program__day-card-image">
                    <img src="@/assets/images/photo4.jpg">
                  </div>
                  <div>
                    <div class="program__day-card-list-title">
                      Теоретический блок
                    </div>
                    <ul class="program__day-card-list">
                      <li>Работа с доп материалами(валики для волос, накладные пряди и т.д)</li>
                      <li>Крепление фаты в пучок</li>
                      <li>Клиентоориентированность. Работа с первыми клиентами, первая невеста</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Демонстрация (показ на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Пучок из прямых волос </li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Отработка ученика (отработка на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Пучок из прямых волос </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День пятый
                </div>
                <hr>
                <div class="program__day-box">
                  <div class="program__day-card-image">
                    <img src="@/assets/images/photo5.jpg">
                  </div>
                  <div>
                    <div class="program__day-card-list-title">
                      Теоретический блок
                    </div>
                    <ul class="program__day-card-list">
                      <li>Как продать свои услуги </li>
                      <li>Как донести ценность своей работы </li>
                      <li>Ценообразование. Как работать всегда в плюс</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Демонстрация (показ на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Высокий пучок </li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Отработка ученика (отработка на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Высокий пучок </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День шестой
                </div>
                <hr>
                <div class="program__day-box">
                  <div class="program__day-card-image">
                    <img src="@/assets/images/photo6.jpg">
                  </div>
                  <div>
                    <div class="program__day-card-list-title">
                      Теоретический блок
                    </div>
                    <ul class="program__day-card-list">
                      <li>С чего начать после курса, план действий</li>
                      <li>Где искать моделей</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Демонстрация (показ на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Гладкие причёски</li>
                      <li>Хвост с элементами плетения</li>
                      <li>Два варианта гладкого пучка</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Отработка ученика (отработка на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Гладкие причёски</li>
                      <li>Хвост с элементами плетения</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="program-card">
              <div class="program__day-card">
                <div class="program__day-card-title">
                  День седьмой
                </div>
                <hr>
                <div class="program__day-box">
                  <div class="program__day-card-image">
                    <img src="@/assets/images/photo7.jpg">
                  </div>
                  <div>
                    <div class="program__day-card-list-title">
                      Теоретический блок
                    </div>
                    <ul class="program__day-card-list">
                      <li>Тренды. Стоит ли за ними следовать ?</li>
                      <li>Где искать вдохновение</li>
                      <li>Оцениваем результаты от проделанной работы за весь курс</li>
                      <li>Закрываем оставшиеся пробелы и вопросы</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Демонстрация (показ на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Ломанная текстура на утюг</li>
                      <li>Причёска с элементами плетения</li>
                    </ul>

                    <div class="program__day-card-list-title">
                      Отработка ученика (отработка на одной модели)
                    </div>
                    <ul class="program__day-card-list">
                      <li>Ломанная текстура на утюг</li>
                      <li>Причёска с элементами плетения</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ssr-carousel>
        </div>
      </b-container>
    </div>

    <div class="schedule">
      <b-container>
        <div class="schedule__header">
          <h2 class="schedule__title">
            {{ $t('program.base_course.schedule_title') }}
          </h2>
        </div>
        <div class="schedule__info">
          <b>Индивидуальный график <font-awesome-icon icon="fa-solid fa-calendar-days" /></b>
          <p>
            Так как обучение проходит в индивидуальном форме, то возможно изменение времени начала обучения, для вашего удобства.
            <br>
            Курс выходного дня длительность 4 недели (работаем с вами по такому же графику работы, что представлен в примере ниже, только все занятия будут по выходным сб, вс).
          </p>
        </div>
        <div class="accordion schedule__tabs" role="tablist">
          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-1 block variant="info">
                <span>Первый день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:30 - теоретический блок</li>
                    <li>11:30-13:00 - демонстрация </li>
                    <li>13:00-13:30 - кофе-брейк </li>
                    <li>13:30-15:30 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-2 block variant="info">
                <span>Второй день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:00 - теоретический блок</li>
                    <li>11:00-12:30 - демонстрация </li>
                    <li>12:30-13:00 - кофе-брейк </li>
                    <li>13:00-15:30 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-3 block variant="info">
                <span>Третий день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:00 - теоретический блок</li>
                    <li>11:00-12:30 - демонстрация </li>
                    <li>12:30-13:00 - кофе-брейк </li>
                    <li>13:00-15:00 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-4 block variant="info">
                <span>Четвертый день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:00 - теоретический блок</li>
                    <li>11:00-12:30 - демонстрация </li>
                    <li>12:30-13:00 - кофе-брейк </li>
                    <li>13:00-15:30 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-5 block variant="info">
                <span>Пятый день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:00 - теоретический блок</li>
                    <li>11:00-12:30 - демонстрация </li>
                    <li>12:30-13:00 - кофе-брейк </li>
                    <li>13:00-15:30 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-6 block variant="info">
                <span>Шестой день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:00 - теоретический блок</li>
                    <li>11:00-12:30 - демонстрация </li>
                    <li>12:30-13:00 - кофе-брейк </li>
                    <li>13:00-15:00 - Отработка на модели</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body>
            <b-card-header header-tag="header" class="p-2" role="tab">
              <b-button v-b-toggle.accordion-7 block variant="info">
                <span>Седьмой день</span>
                <font-awesome-icon class="schedule__tab-icon open-icon" icon="fa-solid fa-caret-right" />
                <font-awesome-icon class="schedule__tab-icon close-icon" icon="fa-solid fa-caret-down" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>
                  <ul class="schedule__list">
                    <li>10:00-11:00 - теоретический блок</li>
                    <li>11:00-12:30 - демонстрация </li>
                    <li>12:30-13:00 - кофе-брейк </li>
                    <li>13:00-15:00 - Отработка на модели</li>
                    <li>15:00 - Вручение сертификата</li>
                  </ul>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </b-container>
    </div>

    <div class="price">
      <b-container>
        <div class="price__grid">
          <div class="price__col-2">
            <div class="price__book">
              <button class="price__book-button" @click="reachOut">
                {{ $t('program.base_course.book_button_text') }}
              </button>
            </div>
          </div>
          <div class="price__col-3">
            <div class="price__header">
              <h2 class="price__title">
                {{ $t('program.base_course.price_title') }}
              </h2>
              <div class="price__amount">
                550 $
              </div>
            </div>
            <small class="price__currency-info">(Принимается в RUB, USD, EUR, TL из рассчета в рублях)</small>
            <div class="price__info">
              Обращаем ваше внимание, что запись и бронирование осуществляется по предоплате (20%).
              При отмене бронирования предоплата не возвращается. Временная бронь 3 дня с момента обращения.
              <br> <b>Возможна беспроцентная рассрочка</b>
            </div>
            <div class="price__benefits">
              <div class="price__contract">
                <b>Договор <font-awesome-icon icon="fa-solid fa-shield-halved" /></b>
                <p>
                  Мы можем выслать вам экземпляр на электронную почту или подписать его с вами при личной встрече
                </p>
              </div>

              <div class="price__included">
                <b>В стоимость входит <font-awesome-icon icon="fa-solid fa-gifts" /></b>
                <ul class="price__included-list">
                  <li>Рабочая тетрадь с добавочными материалами</li>
                  <li>Гайд по стайлингу и инструментам в электронном формате</li>
                  <li>Все материалы на время обучения (стайлинг, инструменты, расходники) </li>
                  <li>Обед. Кофе-брейк</li>
                  <li>Модели для отработки</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  head () {
    return {
      title: this.$t('program.base_course.seo.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('program.base_course.seo.description')
        },
        { name: 'keywords', content: this.$t('program.base_course.seo.keywords') },
        {
          name: 'news_keywords',
          content: this.$t('program.base_course.seo.keywords')
        },
        {
          property: 'og:title',
          content: this.$t('program.base_course.seo.title')
        },
        {
          property: 'og:description',
          content: this.$t('program.base_course.seo.description')
        },
        {
          property: 'og:image:alt',
          content: this.$t('program.base_course.seo.description')
        }
      ]
    }
  },

  created () {
    if (this.$i18n.locale === 'en') {
      this.$nuxt.error({ statusCode: 404, message: "This program doesn't exist in this language" })
    }
  },

  methods: {
    ...mapActions({
      changeShowModal: 'reachOut/changeShowModal',
      changeService: 'reachOut/changeService'
    }),

    reachOut () {
      this.changeShowModal(true)
      this.changeService('base_course')
    }
  }
}
</script>

<style lang="scss" src="~/assets/styles/pages/program-page.scss" />
