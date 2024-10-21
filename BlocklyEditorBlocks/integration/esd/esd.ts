export default [
  {
    type: 'esd_order_for_shipping',
    message0: 'Заказ на перевозку %1 Тип %2 Грузоотправитель %3 Грузоперевозчик %4 Вместимость ТС %5 Грузоподъемность ТС %6 Тип ТС %7 Тип кузова ТС %8 Тип погрузки ТС %9 Доп. информация ТС %10 Адрес отправления %11 Дата подачи ТС %12 Интервал подачи ТС %13 Адрес конечного пункта %14 Промежуточные точки маршрута %15 Пункты маршрута %16 Минимальная влажность %17 Максимальная влажность %18 Минимальная температура %19 Максимальная температура %20 Иные условия перевозки %21 Предельный срок перевозки %22 Требования по перевозке пищевых продуктов %23 Указания норм %24 Наименование составителя %25 Договор %26 Дата %27 Номер %28 Наименование %29 Стороны %30 Основание составления %31 Дата %32 Номер %33 Наименование %34 Доп. сведения %35 Идентификатор %36 Стороны %37',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Документ.Тип',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ГрузоотправительСсылка',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ГрузоперевозчикСсылка',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ПараметрыТС.Вместимость',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ПараметрыТС.Грузоподъемность',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ПараметрыТС.Тип',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ПараметрыТС.ТипКузова',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ПараметрыТС.ТипПогрузки',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'ПараметрыТС.Другое',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Маршрут.Отправление.АдресТекст',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Маршрут.Отправление.ПодачаТС.ДатаВремя',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Маршрут.Отправление.ПодачаТС.ПредельныйИнтервалВремени',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Маршрут.КонечныйПункт.Название',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Маршрут.ПромежуточныйПункт',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Маршрут.Пункт',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.КлиматическийРежим.Влажность.Минимальная',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.КлиматическийРежим.Влажность.Максимальная',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.КлиматическийРежим.Температура.Минимальная',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.КлиматическийРежим.Температура.Максимальная',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.Иные',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.ПредельныйСрок',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.ТребованияПоПеревозкеПищевыхПродуктов',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'УсловияПеревозки.УказанияНорм',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Файл.Составитель.Наименование',
        align: 'RIGHT'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Договор.Дата',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Договор.Номер',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Договор.Наименование',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Договор.Стороны',
        align: 'RIGHT'
      },
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'Файл.Составитель.Основание.Документ.Дата',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Файл.Составитель.Основание.Документ.Номер',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Файл.Составитель.Основание.Документ.Наименование',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Файл.Составитель.Основание.Документ.ДополнительныеСведения',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Файл.Составитель.Основание.Документ.Идентификатор',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Файл.Составитель.Основание.Документ.Стороны',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Блок отражает подстановки документа Заказ на перевозку. BlockType: esd_order_for_shipping',
    helpUrl: 'https://n.sbis.ru/saby_integration/knowledge?published=true&mode=readList&article=78c8bede-bdd1-4f7d-a88e-b9d966f2eef6'
  },
  {
    type: 'esd_route_point',
    message0: 'Пункт маршрута %1 Адрес %2 Дата время %3 Предельный интервал времени %4 Тип операции %5 ИНН организации %6 Название организации %7',
    args0: [
      {
        type: 'input_dummy'
      },
      {
        type: 'input_value',
        name: 'АдресТекст',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Операция.ДатаВремя',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Операция.ПредельныйИнтервалВремени',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Операция.Тип',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Организация.ИНН',
        align: 'RIGHT'
      },
      {
        type: 'input_value',
        name: 'Организация.Название',
        align: 'RIGHT'
      }
    ],
    inputsInline: false,
    output: null,
    style: 'SABY ЭДО',
    tooltip: 'Блок отражает подстановки пунктов маршрута документа Заказ на перевозку BlockType: esd_route_point',
    helpUrl: 'https://n.sbis.ru/saby_integration/knowledge?published=true&mode=readList&article=3b7558ea-60f0-4ee9-b860-e64c799df91a'
  }
];
