<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <nuxt-link :to="localePath('/guide')">
          {{ $t('guide_back_link') }}
        </nuxt-link>

        <h1>{{ $t('guide_agreement_title') }}</h1>

        <template v-if="$i18n.locale === 'ru'">
          <h2>Публичный Договор-оферта на оказание информационно-консультативных услуг</h2>
          <p>
            Hастоящий договор является публичным договором (публичной офертой) индивидуального предпринимателя Савкин Александр, именуемого в дальнейшем «Исполнитель», действующего на основании Свидетельства о государственной регистрации физического лица в качестве индивидуального предпринимателя (Российская Федерация) с одной стороны ("Испольнитель"), и любым физическим или юридическим лицом, принявшим условия настоящего договора, с другой стороны, именуемым в дальнейшем «Заказчик».
          </p>

          <p>
            <b>1.</b> Определения и термины
            <br><b>1.1.</b> Оферта – формальное предложение некоторого лица (оферента) определенному лицу (акцептанту) заключить сделку (договор) с указанием всех необходимых для этого условий.
            <br><b>1.2.</b> Акцепт Оферты - полное и безоговорочное принятие Оферты путем осуществления 100% предварительной оплаты за оказываемую Информационную услугу.
            <br><b>1.3.</b> Исполнитель – Инивидуальный предприниматель(ИП) Савкин Александр, предоставляющий Информационные услуги Заказчику на условиях настоящей Оферты.
            <br><b>1.4.</b> Заказчик - лицо, осуществившее Акцепт Оферты на изложенных в ней условиях.
            <br><b>1.5.</b> Договор на оказание информационных услуг (далее – Договор) – договор между Заказчиком и Исполнителем на предоставление Информационных услуг, который заключается посредством Акцепта настоящей Оферты.
            <br><b>1.6.</b> Сайт (ресурс) – это совокупность связанных между собой веб-страниц, размещенных в сети Интернет по уникальному адресу (URL): https://www.vikosto.net
            <br><b>1.7.</b> Информация – любые сведения, любой контент, размещенные на Ресурсе.
            <br><b>1.8.</b> Контент Сайта - информационные материалы, права на которые принадлежат Исполнителю и / или его контрагентам, размещаемые силами Исполнителя на Сайте, а именно: авторские программы тренингов, видеоматериалы, гайды, любые изображения, а также любые другие материалы, размещенные на Сайте либо высылаемые Заказчику и применяемые для оказания Услуг.
            <br><b>1.9.</b> Программа – комплекс информационных материалов рекомендательного характера.
            <br><b>1.10.</b> Пользователь Ресурса – любое лицо, принявшее условия настоящего Соглашения ( пользователь автоматически принимает соглашение, если продолжает пользоваться сайтом) и осуществляющее доступ к Ресурсу посредством сети Интернет.
            <br><b>1.11.</b> Учетная запись (аккаунт) - запись, хранящаяся на Сайте, содержащая сведения, необходимые для идентификации Пользователя при предоставлении доступа к Сайту, информацию для Авторизации и учета на Сайте. К такой записи, в том числе относятся имя Пользователя и пароль (или другие аналогичные средства аутентификации). Все действия, совершаемые конкретным лицом на сайте после приобретения платных информационно-консультативных услуг, производятся только с того аккаунта, доступ которому был открыт для оказания услуги.
            <br><b>1.12.</b> Информационные услуги - услуги Исполнителя по предоставлению ограниченного доступа Заказчик к Сайту в соответствии с условиями Оферты для получения оплаченных ранее услуг на интернет-ресурсе. Форма оказания Услуг, а так же сроки и необходимость предоставления сопутствующих информационных услуг определяются Исполнителем самостоятельно.
          </p>

          <p>
            <b>2.</b> Общие положения
            <br><b>2.1.</b> Данный документ является публичной Офертой ИП Александр Савкин (в дальнейшем именуемого “Исполнитель”)
            <br><b>2.2.</b> Любое физическое лицо, имеющее намерение приобрести информационно- консультативную услугу и оплатить получение информационно- консультативной услуги, именуется “Заказчиком”.
            <br><b>2.3.</b>Полным и безоговорочным акцептом настоящей публичной оферты считается факт оплаты Заказчиком услуг, предоставляемых Исполнителем в соответствии с условиями Договора, путем нажатия на кнопку «КУПИТЬ ГАЙД» или «BUY THE GUIDE» на сайте Исполнителя по адресу https://www.vikosto.net. Так же «заказчик» безоговорочно подтверждает свое совершеннолетие, осуществляя любые действие с любым разделом сайта.
            <br><b>2.4.</b> Предоставление услуг считается оказанным при отправке и получении электронного товара заказчику.
          </p>

          <p>
            <b>3.</b> Предмет Договора
            <br><b>3.1.</b> Содержание Услуг:
            <br><b>3.1.2.</b> Предоставление информации и материалов (программа, гайд, видео курс, веб- консультации, вебинары, электронные книги и курсы) в зависимости от выбранной Заказчиком Программы
            <br><b>3.2.</b> Исполнитель не предоставляет образовательные услуги официального учебного заведения и не занимается выдачей каких-либо сертификатов и лицензий.
            <br><b>3.3</b> Заказчик полностью осознает, что результат оказания Услуг целиком зависит от того, насколько старательно и добросовестно им будет выполняться Программа (гайд) . Ввиду того, что Исполнитель не имеет возможности проконтролировать правильность и добросовестность выполнения Программы (гайда) , Заказчик полностью осознает, что Исполнитель ни при каких условиях не может нести и не несет ответственности за результат применения Программы Заказчиком.
            <br><b>3.4.</b> Исполнитель имеет право в любой момент изменять даты и время проведения мероприятий, а так же условия настоящей публичной Оферты в одностороннем порядке без предварительного согласования с Заказчиком, обеспечивая при этом публикацию измененных условий не менее чем за один день до их ввода в действие.
            <br><b>3.5.</b> Исполнитель не несет ответственности за своевременность, качество и сроки работ подрядчиков и иных лиц, оказывающие услуги по субагентским и агентским договорам. Ответственность за надлежащее оказание этих услуг возлагается на лиц, фактически их исполняющие.
          </p>

          <p>
            <b>4.</b> Права и обязанности Исполнителя
            <br>Исполнитель обязан:
            <br><b>4.1.</b> Надлежащим образом оказать Услуги по настоящему Договору.
            <br><b>4.2.</b> Оказать Услуги непосредственно после поступления на счет Исполнителя полной стоимости Услуг.
            <br><b>4.3.</b> Услуги считаются оказанными надлежащим образом и принятыми Заказчиком, если в течение 7 дней после оказания Услуг Исполнитель не получил от Заказчика письменных мотивированных возражений. По истечении срока, указанного выше, претензии Заказчика относительно недостатков Услуг, в том числе по количеству (объему), стоимости и качеству не принимаются.
            <br>Права Исполнителя:
            <br><b>4.4.</b> Самостоятельно определять способы и методы оказания Услуг без предварительного согласования с Заказчиком.
          </p>

          <p>
            <b>5.</b> Права и обязанности Заказчика
            <br>Заказчик обязан:
            <br><b>5.1.</b> Предоставлять Исполнителю достоверные сведения и данные, необходимые для оказания Услуг.
            <br><b>5.2.</b> Не воспроизводить, не копировать, не распространять, а также не использовать любым иным способом в каких бы то ни было целях содержание Программы (гайда), за исключением личного использования в рамках достижения цели Договора.
            <br><b>5.3.</b> Не осуществлять действия по размещению в сети Интернет любых незаконных, дискредитирующих или носящих угрозу сообщений, в том числе, сообщений, противоречащих законодательству Российская Федерация.
            <br><b>5.4.</b> Не осуществлять любые способы агитации и подстрекательства иных лиц в целях использования каких-либо конкурентных для Исполнителя продуктов или услуг, не размещать в сети Интернет информацию, каким-либо образом дискредитирующую Исполнителя, в том числе, данные о недостижении Заказчиком каких-либо желаемых им результатов.
            <br><b>5.5.</b> Выполнять и полностью соблюдать программы/гайды/инфопродукты, предоставленные Исполнителем.
            <br>Права Заказчика:
            <br><b>5.6.</b> Требовать от Исполнителя надлежащего оказания Услуг.
          </p>

          <p>
            <b>6.</b> Условия и порядок предоставления услуг
            <br><b>6.1.</b> Информационно-консультационные услуги предоставляются в полном объеме при условии их 100% (сто процентов) оплаты Заказчиком.
            <br><b>6.2.</b> Факт приобретения Информационно-консультативных услуг является безоговорочным принятием Заказчиком данного Договора-оферты. Заказчик, воспользовавшийся услугами Исполнителя, рассматривается как лицо, вступившее с Исполнителем в договорные отношения.
            <br><b>6.3.</b> В случае, если Заказчик оплатил свой заказ, но доступ через e-mail не был предоставлен к оплаченной Услуге Исполнителя в течении 3 рабочих дней с момента зачисления платежа, необходимо сообщить о данном факте на e-mail: vi.kosto@yandex.ru, и предоставить подтверждающий осуществление платежа документ.
            <br><b>6.4.</b> Настоящий договор имеет силу Акта об оказании услуг. Отсутствие требования о возврате денежных средств означает, что услуги оказаны полностью, в срок и надлежащего качества. Приемка производится без подписания Актов на бумажном, или иных носителях.
            <br><b>6.5.</b> Исполнитель оставляет за собой право в одностороннем порядке прекратить (отказать) предоставление Услуг Заказчику без права на возврат денежных средств в случае нарушения правил поведения на вебинарах, интернет-семинарах или иных программах и Услугах, оказываемых Исполнителем.
            <br><b>6.6.</b> В число случаев нарушения правил, являющихся поводом в отказе дальнейшего предоставления Услуги входит, включая, но не ограничиваясь этим, следующее:
            <ul>
              <li>разжигание межнациональных конфликтов, отвлечение участников от темы вебинара, интернет-семинара и других Услуг, оказываемых Заказчику или группе Заказчиков;</li>
              <li>спам;</li>
              <li>размещение рекламы своих или чужих услуг;</li>
              <li>нецензурные высказывания, хамство, оскорбления, внесение негатива в группе, призывы к массовому отказу от участия в интернет-семинарах, вебинарах и других услугах, оказываемых Исполнителем.</li>
            </ul>
            <br><b>6.7.</b> Услуги предоставляются для личного использования Заказчиком. Запрещается передавать записи, доступы, логины и пароли для доступа к гайду третьим лицам для их совместного использования без специального на то разрешения (согласования) Исполнителя.
            <br> Исполнитель оставляет за собой право в одностороннем порядке отключать от участия в интернет-семинаре (вебинаре) или другой Услуге, оказываемой исполнителем) лицо, совершившее несанкционированный, несогласованный доступ.
            <br><b>6.8.</b> Заказчику запрещается распространять (публиковать, размещать на Интернет- сайтах, копировать, передавать или перепродавать третьим лицам) в коммерческих или некоммерческих целях предоставляемую Исполнителем Заказчику информацию и материалы в рамках настоящего договора Оферты, создавать на ее основе информационные продукты, а также использовать эту информацию каким-либо иным образом, кроме как для личного пользования.
            <br><b>6.9.</b> Исполнитель оставляет за собой право осуществлять запись проводимых информационно-консультативных Услуг.
            <br><b>6.10.</b> Участнику, получающему Услугу, запрещается осуществлять запись информационно-консультативной Услуги без специального на то разрешения Исполнителя.
          </p>

          <p>
            <b>7.</b> Финансовые условия
            <br><b>7.1.</b> Услуги предоставляются при условии их 100% оплаты Заказчиком. Оплата Услуг оформляется при заключении Договора на Сайте Исполнителя. Оплата производится через online E-POS. В случае если оплата не будет осуществлена, Договор не считается заключенным.
          </p>

          <p>
            <b>8.</b> Гарантии и ответственность
            <br><b>8.1.</b> Исполнитель НЕ несет за недостижение ожидаемых Заказчиком им результатов, либо несоответствие полученного результата ожиданиям Заказчика, поскольку, не имеет возможности полностью контролировать выполнение Исполнителем разработанных програм, гайдов или инных инфопродуктов.
            <br><b>8.5.</b> В случае нарушения Заказчиком п. 5.2 Договора, по требованию Исполнителя Заказчик уплачивает штраф в размере 7 000 000 (семь миллионов) российских рублей за каждый случай нарушения. Кроме того, в таком Исполнитель имеет право случае в одностороннем порядке расторгнуть Договор без компенсации Заказчику уплаченных денежных СРЕДСТВ.
            <br><b>8.6.</b> В случае нарушения Заказчиком п.п. 5.3, 5.4 Договора, Исполнитель имеет право в одностороннем порядке расторгнуть Договор без компенсации Заказчику уплаченных денежных СРЕДСТВ и без направления соответствующего уведомления
            <br><b>8.7.</b> Исполнитель не несет ответственности за невозможность обслуживания Заказчика по причинам, связанным с нарушением работы Интернет-канала, оборудования или программного обеспечения со стороны Заказчика.
            <br><b>8.8.</b> В случае, если по какой-либо причине Исполнитель не оказывает Услуги в оговоренные сроки, ответственность Исполнителя ограничивается исключительно проведением соответствующего вебинара (или серии вебинаров, иных Услуг) в новые сроки.
            <br><b>8.9.</b> Исполнитель не несет ответственности за то, каким образом Заказчик использовал полученную в ходе информационно-консультационного обслуживания ( гайд или вебинар или любой другой инфопродукт) информацию, и за результаты ее использования Заказчиком.
            <br><b>8.10.</b> Совокупная ответственность Исполнителя по договору Оферты, по любому иску или претензии в отношении договора Оферты или его исполнения ограничивается суммой платежа, уплаченного Исполнителю Заказчиком по договору Оферты, и не может включать иные расходы, связанные с осуществлением деятельности или отсутствием таковой у Заказчика.
            <br><b>8.11.</b> За невыполнение или ненадлежащее выполнение обязательств по настоящей публичной Оферте Стороны несут ответственность в соответствии с действующим законодательством РФ.
            <br><b>8.12.</b> Заказчик несет полную ответственность за соблюдение требований законодательства РФ, в том числе законодательства о рекламе, о защите авторских и смежных прав, об охране товарных знаков и знаков обслуживания, но не ограничиваясь перечисленным, включая полную ответственность за содержание и форму материалов.
            <br><b>8.13.</b> Исполнитель не несет ответственности перед Заказчиком за любой убыток или ущерб, понесенный Пользователем в результате удаления, сбоя или невозможности сохранения какого-либо Содержания и иных коммуникационных данных, содержащихся на Ресурсе или передаваемых через такой Ресурс (сайт/почта/соц сети/мессенджеры).
            <br><b>8.14.</b> Исполнитель не несет ответственности за любые прямые или косвенные убытки, произошедшие из-за: использования либо невозможности использования Сайта, либо отдельных сервисов; несанкционированного доступа к коммуникациям Заказчика; заявления или поведение любого третьего лица на сайте.
            <br><b>8.15.</b> Ответственность Исполнителя ограничена стоимостью оказания Услуг в соответствии с настоящим Договором.
          </p>

          <p>
            <b>9.</b> Обработка персональных данных Заказчика
            <br><b>9.1.</b> Предоставляя необходимую для оказания Услуг информацию, Заказчик предоставляет Исполнителю свои персональные данные. Настоящим Заказчик выражает свое Согласие на обработку персональных переданных.
            <br><b>9.2.</b> Исполнитель при обработке персональных данных Заказчика обязуется принять все предусмотренные действующим законодательством Российская Федерация меры для их защиты от несанкционированного доступа.
          </p>

          <p>
            <b>10.</b> Безопасность учетных данных
            <br><b>10.1.</b> Указывая свои данные на сайте, путем заполнения соответствующих регистрационных или инных форм, Пользователь дает свое согласие на сбор, обработку, хранение своих персональных данных.
            <br><b>10.2.</b> Исполнитель гарантирует сохранность полученных данных и отсутствие доступа к ним со стороны третьих лиц.
          </p>

          <p>
            <b>11.</b> Права на результаты интеллектуальноий деятельности
            <br><b>11.1.</b> Исключительные права на Программы/гайды/ вебинары, их содержание, принадлежат Исполнителю, и / или его контрагентам.
            <br><b>11.2.</b> Заказчик имеет право использовать Программы/гайды/вебинары или инные инфопродукты исключительно в личных, некоммерческих целях для достижения цели Договора.
          </p>

          <p>
            <b>12.</b> Условия и порядок возврата денежных средств за информационно- консультативные услуги.
            <br><b>12.1.</b> Электронные гайды и курсы/программы возврату не подлежат.
            <br><b>12.2.</b> Для осуществления претензий или жалоб Заказчик должен прислать в установленный срок заявку на vi.kosto@yandex.ru.
            <br><b>12.3.</b> В случае отказа в возврате денежных средств Заказчик будет проинфомирован об этом по адресу электронной почты, с котороий осуществлялась заявка на Возврат с указанием причины отказа.
            <br><b>12.4.</b> Исполнение либо ненадлежащее исполнение Заказчиком условий получения Информационной услуги (включая, но не ограничиваясь следующим: отсутствие на онлайн-вебинарах, семинарах, гайды и отказ выполнения заданий Исполнителя в ходе оказания Информационной услуги) является для Исполнителя основанием для отказа в возврате денежных средств, внесенных Заказчиком в пользу Исполнителя за оказанную Информационную услугу, чем бы не обосновывалось данное требование, что безоговорочно принимается Сторонами.
          </p>

          <p>
            <b>13.</b> Порядок разрешения споров
            <br><b>13.1.</b> В случае возникновения споров, связанных с исполнением настоящего Договора, Сторонами будет применен досудебныий порядок урегулирования спора.
            <br><b>13.2.</b> В случае невозможности разрешения спора путем переговоров, он будет передан Сторонами на рассмотрение Арбитражного суда по месту нахождения Исполнителя.
          </p>

          <p>
            <b>14.</b> Изменение условий Оферты
            <br><b>14.1.</b> Изменение условий Оферты производится Исполнителем в одностороннем порядке.
            <br><b>14.2. </b>Обновленная версия Оферты публикуется на Сайте Исполнителя не позднее, чем за 1 (один) день до вступления новых условий Оферты в силу.
          </p>

          <p>
            <b>15.</b> Заключительные условия
            <br><b>15.1.</b> По всем вопросам и претензиям Заказчик может обращаться по адресу: vi.kosto@yandex.ru
            <br><b>15.2.</b> Если по тем или иным причинам одна или несколько норм настоящей Оферты являются недействительной или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных норм.
            <br><b>15.3.</b> К настоящему соглашению применяется законодательство Российская Федерация.
            <br><b>15.4.</b> Ничто в Оферте не может пониматься как установление между Заказчиком и Исполнителем агентских отношений, отношений товарищества, отношений по совместной деятельности, отношений личного найма, либо каких-то иных отношений, прямо не предусмотренных Офертой.
            <br><b>15.5.</b> Соглашаясь с условиями данной Оферты, Заказчик подтверждает и гарантирует Исполнителю, что:
            <br><b>15.5.1.</b> Заказчик:
            <ul>
              <li>полностью ознакомился с условиями Договора-оферты;</li>
              <li>полностью понимает предмет Договора-оферты;</li>
              <li>
                полностью понимает значение и последствия своих действий в отношении
                заключения и исполнения настоящего Договора-оферты.
              </li>
              <li>подтверждает свое совершеннолетие.</li>
            </ul>
            <br><b>15.2.</b> Договор представляет собой полную договоренность между Исполнителем и Заказчиком.
            <br><b>15.3.</b> Исполнитель не принимает на себя никаких условий и обязательств в отношении предмета Договора, кроме указанных в нем.
            <br><b>15.4.</b> Вопросы, не урегулированные Договором, регулируются действующим законодательством Российская Федерация.
            <br><b>15.5.</b> В случае возникновения споров и разногласий Стороны приложат все усилия, чтобы устранить их путем переговоров или в претензионном порядке. Срок рассмотрения претензии - 10 (десять) дней с момента ее получения.
            <br><b>15.6.</b> В случае невозможности разрешения споров и разногласий путем переговоров или в претензионном порядке, Стороны вправе передать спор на рассмотрение в суд общей юрисдикции по месту нахождения Исполнителя. Споры между Сторонами разрешаются в соответствии с действующим законодательством Российская Федерация.
            <br><b>15.7.</b> Договор вступает в силу с момента акцепта Заказчиком настоящей публичной оферты и действует до полного исполнения Сторонами принятых на себя обязательств.
            <br><b>15.8.</b> Договор-оферта вступает в силу с момента согласия Заказчика с условиями настоящей Оферты (в момент оплаты Услуг Исполнителя), срок действия которого не ограничен данной Офертой.
          </p>

          <p>
            <b>16.</b> Реквизиты Исполнителя:
            <br><b>16.1</b> Реквизиты Исполнителя:
            <br>Индивидуальный предприниматель Савкин Александр (Российская Федерация)
            <br>Налоговый код - 560902618710
          </p>
        </template>
        <template v-else>
          <h2>Public Offer Contract for Information and Consulting Services</h2>
          <p>
            This agreement is a public offer contract (public offer) of individual entrepreneur Aleksandr Savkin, hereinafter referred to as the "Executor", acting on the basis of a Certificate of State Registration of a Physical Person as an Individual Entrepreneur (Russian Federation) on the one hand ("Executor"), and any physical or legal person who accepts the conditions of this agreement, on the other hand, hereinafter referred to as the "Customer".
          </p>
          <p>
            <b>1.</b> Definitions and terms
            <br><b>1.1.</b> Offer - a formal proposal of a certain person (offeror) to a certain person (acceptor) to conclude a transaction (contract) with all the necessary conditions.
            <br><b>1.2.</b> Acceptance of the Offer - full and unconditional acceptance of the Offer by making a 100% advance payment for the Information service provided.
            <br><b>1.3.</b> Executor - Individual Entrepreneur Savkin Aleksandr, providing Information services to the Customer on the terms of this Offer.
            <br><b>1.4.</b> Customer - a person who has accepted the Offer on the conditions set forth therein.
            <br><b>1.5.</b> Agreement on the provision of information services (hereinafter - the Agreement) - an agreement between the Customer and the Executor on the provision of Information services, which is concluded by accepting this Offer.
            <br><b>1.6.</b> Site (resource) - a set of related web pages located on the Internet at a unique address (URL): https://www.vikosto.net
            <br><b>1.7.</b> Information - any information, any content posted on the Resource.
            <br><b>1.8.</b> Site Content - informational materials, the rights to which belong to the Executor and/or his contractors, placed by the Executor on the Site, namely: copyright training programs, video materials, guides, any images, as well as any other materials placed on the Site or sent to the Customer and used to provide Services.
            <br><b>1.9.</b> Program - a complex of information materials of a recommendatory nature.
            <br><b>1.10.</b> User of the Resource - any person who has accepted the terms of this Agreement (the user automatically agrees to the agreement if they continue to use the site) and gains access to the Resource through the Internet.
            <br><b>1.11.</b> Account - a record stored on the Site containing the information necessary to identify the User when providing access to the Site, information for Authorization and accounting on the Site. This includes the record, including the User's login and password, which provides access to the Site, and which is created by the User independently or provided by the Executor at the User's request.
            <br><b>1.12.</b> Information services - the services of the Performer to provide the Customer with limited access to the Site in accordance with the terms of the Offer to receive previously paid services on the internet resource. The form of providing the services, as well as the terms and the necessity of providing accompanying information services, are determined solely by the Performer.
          </p>

          <p>
            <b>2.</b> General Provisions
            <br><b>2.1.</b> This document is a public Offer of Individual Entrepreneur Aleksandr Savkin (hereinafter referred to as the "Executor").
            <br><b>2.2.</b> Any individual who intends to purchase an information and consulting service and pay for the receipt of an information and consulting service is referred to as the "Customer".
            <br><b>2.3.</b> The fact of payment by the Customer for the services provided by the Executor in accordance with the terms of the Agreement, by clicking on the "КУПИТЬ ГАЙД" or "BUY THE GUIDE" button on the Executor's website at https://www.vikosto.net, is considered a full and unconditional acceptance of this public offer. The "Customer" also unconditionally confirms their legal age by performing any action with any section of the site.
            <br><b>2.4.</b> The provision of services is considered to be provided upon sending and receiving the electronic product to the customer.
          </p>

          <p>
            <b>3.</b> Subject Matter of the Contract<br>
            <b>3.1.</b> Content of Services:<br>
            <b>3.1.2.</b> Provision of information and materials (program, guide, video course, web consultations, webinars, e-books and courses) depending on the Program chosen by the Customer.<br>
            <b>3.2.</b> The Performer does not provide official educational services and does not issue any certificates or licenses.<br>
            <b>3.3.</b> The Customer fully realizes that the result of the Services provided depends entirely on how diligently and conscientiously the Program (guide) is performed by them. Given that the Performer does not have the ability to control the correctness and conscientiousness of the Program (guide) implementation, the Customer fully realizes that the Performer under no circumstances can and does not assume responsibility for the result of the Customer's application of the Program.<br>
            <b>3.4.</b> The Performer has the right to unilaterally change the dates and times of events, as well as the terms of this public Offer, at any time without prior approval of the Customer, while providing the publication of the changed conditions no later than one day before they take effect.<br>
            <b>3.5.</b> The Performer is not responsible for the timeliness, quality and terms of work of contractors and other persons who provide services under sub-agent and agency contracts. The responsibility for the proper provision of these services is borne by the persons who actually perform them.
          </p>

          <p>
            <b>4.</b> Rights and Obligations of the Contractor
            <br>The Contractor is obligated to:
            <br><b>4.1.</b> Properly provide the Services under this Agreement.
            <br><b>4.2.</b> Provide the Services directly after receipt of the full cost of the Services to the Contractor's account.
            <br><b>4.3.</b> Services are considered properly provided and accepted by the Customer if the Contractor has not received written motivated objections from the Customer within 7 days after the Services have been provided. After the above-mentioned period, claims of the Customer regarding deficiencies in the Services, including quantity (volume), cost, and quality, will not be accepted.
            <br>The Contractor has the right to:
            <br><b>4.4.</b> Independently determine the methods and means of providing the Services without prior agreement with the Customer.
          </p>

          <p>
            <b>5.</b> Rights and obligations of the Customer
            <br>Customer shall:
            <br><b>5.1.</b> Provide the Performer with accurate information and data necessary for the provision of the Services.
            <br><b>5.2.</b> Not reproduce, copy, distribute, or otherwise use the content of the Program (guide) in any way for any purpose, except for personal use within the scope of achieving the objectives of the Agreement.
            <br><b>5.3.</b> Not take any actions to place any illegal, discrediting, or threatening messages on the Internet, including messages that contradict the legislation of the Russian Federation.
            <br><b>5.4.</b> Not engage in any form of agitation or incitement of other persons for the purpose of using any competitive products or services for the Performer, not to post information on the Internet in any way discrediting the Performer, including data on the Customer's failure to achieve any desired results.
            <br><b>5.5.</b> Perform and fully comply with the programs/guides/info products provided by the Performer.
            <br>Customer's rights:
            <br><b>5.6.</b> Demand proper provision of the Services from the Performer.
          </p>

          <p>
            <b>6.</b> Terms and conditions of service provision
            <br><b>6.1.</b> Information and consulting services are provided in full upon their 100% (one hundred percent) payment by the Customer.
            <br><b>6.2.</b> The fact of purchasing Information and consulting services is an unconditional acceptance of this Offer Agreement by the Customer. The Customer who has used the Performer's services is considered to have entered into contractual relations with the Performer.
            <br><b>6.3.</b> If the Customer has paid for their order, but access via email to the paid Service has not been provided within 3 business days from the moment the payment was credited, it is necessary to report this fact to the email: vi.kosto@yandex.ru, and provide a document confirming the payment made.
            <br><b>6.4.</b> This Agreement is valid as an Act of Service Provision. The absence of a demand for a refund of funds means that the services have been provided in full, on time and with proper quality. Acceptance is made without signing Acts on paper or other media.
            <br><b>6.5.</b> The Performer reserves the right to unilaterally terminate (refuse) the provision of Services to the Customer without the right to a refund in case of violation of the rules of conduct in webinars, internet seminars, or other programs and Services provided by the Performer.
            <br><b>6.6.</b> The following cases of rule violations are included, but not limited to, the reasons for the refusal of further service provision:
            <ul>
              <li>incitement of interethnic conflicts, distraction of participants from the topic of the webinar, internet seminar, and other Services provided to the Customer or group of Customers;</li>
              <li>spam;</li>
              <li>advertising of their or other people's services;</li>
              <li>obscene language, rudeness, insults, introduction of negativity into the group, calls for mass refusal to participate in internet seminars, webinars, and other services provided by the Performer.</li>
            </ul>
            <br><b>6.7.</b> The Services are provided for personal use by the Customer. It is forbidden to transfer recordings, access, logins, and passwords to the guide to third parties for their joint use without special permission (coordination) of the Performer.
            <br>The Performer reserves the right to unilaterally disconnect a person who has committed unauthorized, uncoordinated access from participating in an internet seminar (webinar) or another Service provided by the performer).
            <br><b>6.8.</b> The Customer is prohibited from distributing (publishing, posting on Internet sites, copying, transmitting or reselling to third parties) the...
          </p>

          <p>
            <b>7.</b> Financial terms
            <br><b>7.1.</b> Services are provided upon 100% payment by the Client. Payment for Services is made upon conclusion of the Contract on the Contractor's website. Payment is made through online E-POS. In case payment is not made, the Contract is not considered concluded.
          </p>

          <p>
            <b>8.</b> Guarantees and liability
            <br><b>8.1.</b> The Contractor is NOT responsible for the failure to achieve the expected results by the Client or for the discrepancy between the results obtained and the Client's expectations, as the Contractor does not have the ability to fully control the implementation of the developed programs, guides, or other infoproducts.
            <br><b>8.5.</b> In case of violation by the Client of clause 5.2 of the Contract, at the request of the Contractor, the Client pays a fine in the amount of 7,000,000 (seven million) Russian rubles for each violation. In addition, in such a case, the Contractor has the right to unilaterally terminate the Contract without compensation to the Client of the paid funds.
            <br><b>8.6.</b> In case of violation by the Client of clauses 5.3, 5.4 of the Contract, the Contractor has the right to unilaterally terminate the Contract without compensation to the Client of the paid funds and without sending the corresponding notification.
            <br><b>8.7.</b> The Contractor is not responsible for the inability to provide services to the Client due to reasons related to the malfunction of the Internet channel, equipment or software on the part of the Client.
            <br><b>8.8.</b> In case, for any reason, the Contractor does not provide the Services within the agreed timeframe, the Contractor's liability is limited exclusively to conducting the corresponding webinar (or series of webinars, other Services) in new terms.
            <br><b>8.9.</b> The Contractor is not responsible for how the Client used the information obtained during the information and consulting service (guide or webinar or any other infoproduct) and for the results of its use by the Client.
            <br><b>8.10.</b> The aggregate liability of the Contractor under the Offer agreement, for any claim or claim relating to the Offer agreement or its performance, is limited to the amount of payment made by the Client to the Contractor under the Offer agreement and cannot include other expenses related to the Client's activities or their absence.
            <br><b>8.11.</b> The Parties are responsible for failure to perform or improper performance of obligations under this public Offer in accordance with the current legislation of the Russian Federation.
            <br><b>8.12.</b> The Customer is fully responsible for complying with the legislation of the Russian Federation, including legislation on advertising, protection of copyright and related rights, protection of trademarks and service marks, but not limited to the listed ones, including full responsibility for the content and form of the materials.
            <br><b>8.13.</b> The Contractor is not responsible to the Customer for any loss or damage incurred by the User as a result of deletion, failure, or inability to save any Content and other communication data contained on the Resource or transmitted through such Resource (website/email/social networks/messengers).
            <br><b>8.14.</b> The Contractor is not responsible for any direct or indirect losses arising from: the use or inability to use the Site or individual services; unauthorized access to Customer communications; statements or conduct of any third party on the site.
            <br><b>8.15.</b> The Contractor's liability is limited to the cost of the Services provided under this Agreement.
          </p>

          <p>
            <b>9.</b> Processing of the Customer's personal data
            <br><b>9.1.</b> By providing the necessary information for the provision of the Services, the Customer provides the Contractor with their personal data. By this Agreement, the Customer expresses their consent to the processing of personal data transferred.
            <br><b>9.2.</b> The Contractor, when processing the Customer's personal data, undertakes to take all measures provided for by the current legislation of the Russian Federation to protect them from unauthorized access.
          </p>

          <p>
            <b>10.</b> Security of account data
            <br><b>10.1</b> By providing their data on the site, by filling out the appropriate registration or other forms, the User gives their consent to the collection, processing, and storage of their personal data.
            <br><b>10.2.</b> The Contractor guarantees the security of the data obtained and the absence of access to them by third parties.
          </p>

          <p>
            <b>11.</b> Intellectual Property Rights
            <br><b>11.1.</b> The exclusive rights to the Programs/guides/webinars, their content, belong to the Performer and/or his contractors.
            <br><b>11.2.</b> The Client has the right to use the Programs/guides/webinars or other information products solely for personal, non-commercial purposes to achieve the purpose of the Agreement.
          </p>

          <p>
            <b>12.</b> Terms and conditions of refund for information and advisory services.
            <br><b>12.1.</b> Electronic guides and courses/programs are not subject to refund.
            <br><b>12.2.</b> To make claims or complaints, the Client must submit a request to vi.kosto@yandex.ru within the prescribed period.
            <br><b>12.3.</b> In case of refusal to refund, the Client will be informed at the email address from which the request for refund was made, indicating the reason for the refusal.
            <br><b>12.4.</b> The performance or improper performance by the Client of the conditions for obtaining the Information Service (including, but not limited to, absence at online webinars, seminars, guides, and refusal to perform tasks by the Performer during the provision of the Information Service) is the basis for the Performer to refuse to refund the funds paid by the Client for the provided Information Service, whatever the justification for such a requirement, which is unconditionally accepted by the Parties.
          </p>

          <p>
            <b>13.</b> Dispute resolution procedure
            <br><b>13.1.</b> In case of disputes related to the performance of this Agreement, the Parties will apply the pre-trial procedure for resolving the dispute.
            <br><b>13.2.</b> In case of impossibility to resolve the dispute through negotiations, it will be transferred by the Parties to the consideration of the Arbitration Court at the location of the Performer.
          </p>

          <p>
            <b>14.</b> Amendment of Offer
            <br><b>14.1.</b> The Contractor may amend the terms of the Offer unilaterally.
            <br><b>14.2.</b> An updated version of the Offer is published on the Contractor's website no later than 1 (one) day before the new terms of the Offer come into force.
          </p>

          <p>
            <b>15.</b> Final Provisions
            <br><b>15.1.</b> For all questions and claims, the Customer may contact vi.kosto@yandex.ru.
            <br><b>15.2.</b> If, for any reason, one or more provisions of this Offer are deemed invalid or unenforceable, this does not affect the validity or applicability of the remaining provisions.
            <br><b>15.3.</b> This agreement is governed by the legislation of the Russian Federation.
            <br><b>15.4.</b> Nothing in the Offer shall be construed as establishing agency, partnership, joint venture, employment, or any other relationship not expressly provided for in the Offer between the Customer and the Contractor.
            <br><b>15.5.</b> By agreeing to the terms of this Offer, the Customer confirms and warrants to the Contractor that:
            <br><b>15.5.1.</b> The Customer:
            <ul>
              <li>Is fully familiarized with the terms of the Offer Agreement;</li>
              <li>Is fully understands the subject matter of the Offer Agreement;</li>
              <li>
                Is fully understands the meaning and consequences of their actions in relation to
                the conclusion and performance of this Offer Agreement.
              </li>
              <li>Confirms their legal age.</li>
            </ul>
            <br><b>15.2.</b> The Agreement represents the complete agreement between the Contractor and the Customer.
            <br><b>15.3.</b> The Contractor does not accept any terms or obligations regarding the subject matter of the Agreement other than those specified therein.
            <br><b>15.4.</b> Questions not regulated by the Agreement shall be governed by the current legislation of the Russian Federation.
            <br><b>15.5.</b> In case of disputes and disagreements, the Parties shall make every effort to resolve them through negotiations or in a pre-trial order. The period for considering the claim is 10 (ten) days from the moment of its receipt.
            <br><b>15.6.</b> In case of impossibility of resolving disputes and disagreements through negotiations or in a pre-trial order, the Parties have the right to transfer the dispute to the court of general jurisdiction at the location of the Contractor. Disputes between the Parties are resolved in accordance with the current legislation of the Russian Federation.
            <br><b>15.7.</b> The Agreement comes into force from the moment of acceptance by the Customer of this public offer and is valid until the Parties fulfill the obligations assumed by them in full.
            <br><b>15.8.</b> The Offer Agreement comes into force from the moment the Customer agrees to the terms of this Offer (at the moment of payment for the Contractor's services), the duration of which is not limited by this Offer.
          </p>

          <p>
            <b>16.</b> Performer Details:
            <br><b>16.1</b> Performer Details:
            <br>Individual entrepreneur Savkin Aleksandr (Russian Federation)
            <br>Tax ID - 560902618710
          </p>
        </template>

        <nuxt-link :to="localePath('/guide')">
          {{ $t('guide_back_link') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'no-header'
}
</script>
