import type {APIRoute} from "astro";

interface Badge {
    text: string;
    backgroundColor: string;
    textColor: string;
}

interface PhraseVariant {
    value: string;
    badge?: Badge;
}

interface PhraseData {
    android?: PhraseVariant;
    ios?: PhraseVariant;
    smartdom?: PhraseVariant;
    lk?: PhraseVariant;
    web?: PhraseVariant;
    android_web?: PhraseVariant;
    pppoe?: PhraseVariant;
    dhcp?: PhraseVariant;
    ts?: PhraseVariant;
    aao?: PhraseVariant;
    handling?: PhraseVariant;
    default?: PhraseVariant;
}

interface SubcategoryData {
    badge?: Badge;
    phrases: {
        [phrase: string]: PhraseData;
    };
}


interface CategoryData {
    badge?: Badge;
    subcategories: {
        [subcategory: string]: SubcategoryData;
    };
}

interface StructuredData {
    [category: string]: CategoryData;
}

const phrases: StructuredData = {
    "Технические вопросы": {
        subcategories: {
            "Интернет": {
                phrases: {

                }
            },
            "Телевидение": {
                phrases: {

                }
            },
            "Домофония": {
                phrases: {

                }
            },
            "Заявки и аварии": {
                phrases: {
                    "Создание заявки": {
                        ts: {
                            value: `Потребуется выезд мастера для проверки линии и оборудования, ситуацию сейчас не получится разрешить удалённо 😢
Восстановление услуги и выезд техника будут бесплатными если ограничения окажутся с нашей стороны.

Вместе с тем, если сложность окажется в вашей зоне ответственности (кабель погрыз котик, хомяк и т.д), то могут потребоваться дополнительные платные работы.
В таком случае стоимость вызова составит 600 рублей в пределах города (за городом стоимость будет выше), стоимость самих работ инженер определит и сообщит на месте ☺️

Когда будет удобно принять техника и какой номер телефона укажем для связи с вами? `
                        },
                        aao: {
                            value: `По вашему адресу я оформлю заявку на проведение работ без визита сервисного инженера
Рекомендуем оставить включенным ваше оборудование в ближайшие 24 часа для возможности удаленной проверки. Максимальный срок исполнения - 24 часа

Мы позвоним вам и в автоматическом режиме уведомим об окончании работ
Для этого подскажите номер телефона для связи с вами, пожалуйста`
                        }
                    },
                    "Заявка назначена": {
                        ts: {
                            value: `Заявку техникам передал, простите, что не удалось решить вопрос сразу 😔
Специалист подойдет с 
Выполнение работ может занять время до `
                        },
                        aao: {
                            value: `Заявку администраторам передал, простите, что не удалось решить вопрос сразу 😔
Специалисты удаленно проверят оборудование и определят, в чем заключается сложность
Скоро свяжемся с вами для информирования по заявке`
                        }
                    },
                    "Нет слотов": {
                        default: {
                            value: `На это время, к сожалению, свободных слотов уже нет😔

Могу предложить вам визит специалиста на placeholder
Подскажите, будет удобно в это время?`
                        }
                    }
                }
            }
        }
    },
    "Абонентские вопросы": {
        subcategories: {
            "Начисления": {
                phrases: {

                }
            },
            "Акции": {
                phrases: {

                }
            },
            "Тарифы": {
                phrases: {

                }
            }
        }
    },
    "Диалог": {
        subcategories: {
            "Приветствия": {
                phrases: {
                    "Проверка информации": {
                        default:
                            {
                                value: `Здравствуйте!
Сейчас разберемся в сложившейся ситуации 👌
Проверяю вашу линию и оборудование. Пожалуйста, подождите`,
                            },
                    },
                    "Уточнение вопроса": {
                        default: {
                            value: `Здравствуйте!
Уточните ваш вопрос подробнее, пожалуйста 🤔`
                        }
                    },
                    "Ознакамливаюсь с перепиской": {
                        default: {
                            value: `Здравствуйте!
Ознакомлюсь с диалогом и вернусь к вам. Пожалуйста, ожидайте`
                        },
                    },
                    "Уточняю информацию": {
                        default: {
                            value: `Здравствуйте!
Понял вас, уточняю 👌`
                        },
                    },
                    "Вопрос подробнее": {
                        default: {
                            value: `Здравствуйте!
Уточните ваш вопрос подробнее, пожалуйста 🤔`
                        },
                    },
                    "Перевод чата": {
                        default: {
                            value: `Здравствуйте!
Сейчас переведу вас на профильного коллегу. Пожалуйста, ожидайте`
                        },
                    },
                    "Уточнение адреса": {
                        default: {
                            value: `Здравствуйте!
Уточните, пожалуйста, номер вашего договора или адрес подключения (город, улица, номер дома и квартиры), а так же ФИО владельца договора`
                        }
                    },
                },
            },
            "Правовая часть": {
                phrases: {
                    "Пинг до 80мс": {
                        default: {
                            value: `До внешних ресурсов скорость может варьироваться, в зависимости от выставленных приоритетов и лимитов на конечном сервере и магистральных узлах провайдера.
С нашей сети скорость гарантироваться может только в рамках нашей сети, где мы можем проверять работу оборудования и корректировать параметры.
Можете ознакомиться на сайте domru.ru слева в разделе Помощь -> Документы -> Описания услуг -> Описание услуги «Доступ в интернет».

В описании услуги интернета пункт 3.3:
3.3 Временные задержки при прохождении (туда и обратно) PING-пакета между Пользовательским (оконченным) оборудованием Абонента и Сетью Оператора связи в среднем за месяц не должна превышать 80 мс.`
                        }
                    },
                    "Допустимые потери пакетов данных": {
                        default: {
                            value: `Можете ознакомиться на сайте domru.ru слева в разделе Помощь -> Документы -> Описания услуг -> Описание услуги «Доступ в интернет».

В описании услуги интернета пункт 3.5:
3.5. Возможная потеря пакетов между магистральными узлами Сети Оператора связи не должна превышать 1% за Расчетный период.`
                        }
                    },
                    "Высокий пинг/недоступность ресурса вне нашей сети": {
                        default: {
                            value: `Можете ознакомиться на сайте domru.ru слева в разделе Помощь -> Документы -> Описания услуг -> Описание услуги «Доступ в интернет».

В описании услуги интернета пункт 3.7:
3.7. Доступ (в том числе скорость доступа) к ресурсам Сети Интернет, правами на управление которыми Оператор связи не обладает, не гарантируется.
Мы физически не можем проверять работы оборудования за пределами нашей сети, так как не мы владельцы других сетей. Данный вопрос решать необходимо уже с тех. поддержкой сервиса.`
                        }
                    },
                    "Теряю деньги из-за отсутствия доступа к интернету": {
                        default: {
                            value: `Физическим лицам предоставляется услуга интернета в качестве развлекательного контента.
Использование данного интернета для заработка денежных средств не предусмотрено.
Вы можете оформить договор как "Юридические лицо " и, в данном случае, мы сможем гарантировать работу интернета для зарабатывания денежных средств.

У физических лиц на исправление услуги интернета выделяется до 10 дней.
Данный пункт указан в договоре 4.3.2 в описании услуг.`
                        }
                    }
                }
            },
            "Отработка негатива": {
                phrases: {}
            },
            "Оценка чата": {
                phrases: {
                    "Без СЗ": {
                        android_web: {
                            value: `Пожалуйста, оцените моё общение через кнопку после завершения диалога 🙏

Спасибо за обращение ❤`,
                            badge: {text: "Android/Web", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        ios: {
                            value: `Пожалуйста, оцените моё общение через звездочку в верхнем правом углу 🙏

Спасибо за обращение ❤`,
                            badge: {text: "iOS", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        }
                    },
                    "СЗ на ТС": {
                        android_web: {
                            value: `Мы с вами сделали всё возможное, чтобы решить вопрос удалённо, спасибо вам за помощь!
Однако эта ситуация требует личного визита мастера, он сможет разобраться на месте и решить вопрос раз и навсегда

Пожалуйста, оцените моё общение через кнопку после завершения диалога 🙏
Спасибо за обращение ❤`,
                            badge: {text: "Android/Web", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        ios: {
                            value: `Мы с вами сделали всё возможное, чтобы решить вопрос удалённо, спасибо вам за помощь!
Однако эта ситуация требует личного визита мастера, он сможет разобраться на месте и решить вопрос раз и навсегда

Пожалуйста, оцените моё общение через звездочку в верхнем правом углу 🙏
Спасибо за обращение ❤`,
                            badge: {text: "iOS", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                    },
                    "СЗ на ААО": {
                        android_web: {
                            value: `Мы с вами сделали всё возможное, чтобы решить вопрос в чате, спасибо вам за помощь!
Эта ситуация требует дополнительной проверки администраторами, они помогут решить вопрос

Пожалуйста, оцените моё общение через кнопку после завершения диалога 🙏
Спасибо за обращение ❤`,
                            badge: {text: "Android/Web", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        ios: {
                            value: `Мы с вами сделали всё возможное, чтобы решить вопрос в чате, спасибо вам за помощь!
Эта ситуация требует дополнительной проверки администраторами, они помогут решить вопрос

Пожалуйста, оцените моё общение через звездочку в верхнем правом углу 🙏
Спасибо за обращение ❤`,
                            badge: {text: "iOS", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        }
                    }
                },
            },
            "Самообслуживание": {
                phrases: {
                    "Консультация по условиям приостановления": {
                        android: {
                            value: `Управлять услугами легко! В приложении Мой Дом.ру (раздел ▶️ Услуги – 🕐Приостановить услуги) вы сможете:
• узнать условия приостановления
• временно приостановить доступ сроком от 7 до 124 дней (услуга платная)
• продлить или изменить сроки приостановления
• отменить приостановление услуг
• проверить активность услуг
Инструкции и ответы на популярные вопросы можно найти в разделе ❤️ Помощь - 📖 Частые вопросы и ответы`,
                            badge: {text: "Android", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        ios: {
                            value: `Управлять услугами легко! В приложении Мой Дом.ру (раздел ▶️ Услуги – 🕐Приостановить обслуживание) вы сможете:
• узнать условия приостановления
• временно приостановить доступ сроком от 7 до 124 дней (услуга платная)
• продлить или изменить сроки приостановления
• отменить приостановление услуг
• проверить активность услуг
Инструкции и ответы на популярные вопросы можно найти в разделе ❤️ Помощь - 💬 Вопросы и ответы`,
                            badge: {text: "iOs", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        lk: {
                            value: `Управлять услугами легко! В личном кабинете https://dom.ru/lk/management?tab=stopservice вы сможете:
• узнать условия приостановления
• временно приостановить доступ сроком от 7 до 124 дней (услуга платная)
• продлить или изменить сроки приостановления
• отменить приостановление услуг
• проверить активность услуг
Инструкции и ответы на популярные вопросы размещены на сайте в разделе ❤️ Помощь`,
                            badge: {text: "ЛК", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        handling: {
                            value: `Я вам помогу и подскажу, как можно самостоятельно выполнить приостановление 🕐
В будущем вы сможете самостоятельно приостанавливать договор, всего в пару кликов 😊`,
                            badge: {text: "Отработка", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        }
                    },
                    "Активация ТП": {
                        android: {
                            value: `Для доступа к услугам необходимо активировать тарифный план 😊
Активировать можно в мобильном приложении Мой Дом.ру (раздел ▶️ Услуги – Активировать тариф)
После активации необходимо перезагрузить роутер
Если нужна будет помощь в активации тарифа или возникнет ошибка - пишите нам 😉
Обязательно поможем!`,
                            badge: {text: "Android", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        ios: {
                            value: `Для доступа к услугам необходимо активировать тарифный план 😊
Активировать можно в мобильном приложении Мой Дом.ру
В разделе 🏠 Главная нажать на кнопку "Активировать тарифный план"
После активации необходимо перезагрузить роутер
Если нужна будет помощь в активации тарифа или возникнет ошибка - пишите нам 😉
Обязательно поможем!`,
                            badge: {text: "iOS", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        lk: {
                            value: `Для доступа к услугам необходимо активировать тарифный план 😊
Активировать можно в личном кабинете https://dom.ru/lk нажав на кнопку "Активировать тариф"
После активации необходимо перезагрузить роутер
Если нужна будет помощь в активации тарифа или возникнет ошибка - пишите нам 😉
Обязательно поможем!`,
                            badge: {text: "ЛК", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        handling: {
                            value: `Я вам помогу и подскажу, как можно самостоятельно Активировать тарифный план 😌
В будущем вы сможете самостоятельно его активировать всего в пару кликов!`,
                            badge: {text: "Отработка", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        }
                    },
                    "Обещанный платеж": {
                        android: {
                            value: `Воспользоваться обещанным платежом можно в мобильном приложении Мой Дом.ру: 🏠 Главная - Мой баланс ▶️ - ⏳ Отложить платеж.
После активации обещанного платежа необходимо перезагрузить роутер
Если нужна будет помощь в активации обещанного платежа или возникнет ошибка при подключении - пишите нам 😉
Обязательно поможем!`,
                            badge: {text: "Android", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        ios: {
                            value: `Воспользоваться обещанным платежом можно в мобильном приложении Мой Дом.ру в разделе 🏠 Главная необходимо нажать 🔘 "Отложить платеж на 5 дней".
После активации обещанного платежа необходимо перезагрузить роутер
Если нужна будет помощь в активации обещанного платежа или возникнет ошибка при подключении - пишите нам 😉
Обязательно поможем!`,
                            badge: {text: "iOS", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        lk: {
                            value: `Воспользоваться обещанным платежом можно в личном кабинете https://dom.ru/lk/promised нажав "Отложить платёж"
После активации обещанного платежа необходимо перезагрузить роутер
Если нужна будет помощь в активации обещанного платежа или возникнет ошибка при подключении - пишите нам 😉
Обязательно поможем!`,
                            badge: {text: "ЛК", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        handling: {
                            value: `Я вам помогу и подскажу, как можно самостоятельно подключить Обещанный Платеж 😊`,
                            badge: {text: "Отработка", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        }
                    },
                    "Консультация по скоростному бонусу": {
                        android: {
                            value: `Выбрать и подключить скоростной бонус можно в приложение Мой Дом.ру
В разделе ▶️ Услуги - Скоростные бонусы
Если возникнут сложности или дополнительные вопросы - обращайтесь
Обязательно поможем! 😉`,
                            badge: {text: "Android", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        ios: {
                            value: `Выбрать и подключить скоростной бонус можно в приложение Мой Дом.ру
В разделе ▶️ Услуги - Скоростные бонусы
Если возникнут сложности или дополнительные вопросы - обращайтесь
Обязательно поможем! 😉`,
                            badge: {text: "iOS", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        lk: {
                            value: `Выбрать и подключить скоростной бонус можно в личном кабинете https://dom.ru/subscriptions/speedBonuses нажав на кнопку "Подробнее" в категории "Скоростные бонусы"
Если возникнут сложности или дополнительные вопросы - обращайтесь
Обязательно поможем! 😉`,
                            badge: {text: "ЛК", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                        handling: {
                            value: `Я вам помогу и подскажу, как можно самостоятельно подключить скоростной бонус 😊
В будущем вы сможете самостоятельно управлять услугами всего в пару кликов`,
                            badge: {text: "ЛК", backgroundColor: "#BD10E0", textColor: "#FFFFFF"}
                        },
                    },
                    "Ключ сети (пароль от Wi-Fi)": {
                        default: {
                            value: `Узнать ключ сети легко! Посмотреть пароль Wi-FI сети можно:
📑 На наклейке с обратной стороны роутера (обычно пароль расположен после Security (WPA/WPA2-PSK))
⚙️ На подключенном устройстве к вашей Wi-Fi сети перейдите на сайт 192.168.0.1 (логин: admin, пароль: admin), строка «Ключ сети», либо раздел «Беспроводной режим» - «Пароль PSK»
📱 Поделиться сетью на смартфоне, который уже подключен к роутеру.  Для этого в настройках телефона, в разделе Wi-Fi, нажмите на вашу подключенную сеть и выберите "Поделиться"
На некоторых моделях роутера ключ сети можно посмотреть в Мобильном приложении Мой Дом.ру – раздел Управление

Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`
                        },
                    },
                    "Восстановление данных (вход в ЛК)": {
                        default: {
                            value: `Получить данные легко, достаточно знать номер договора или номер телефона!

Для восстановления данных перейдите по ссылке https://dom.ru/user/recovery/pass и следуйте подсказкам.
Убедитесь, что верно указан ваш город.

Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`
                        }
                    },
                    "Настройка роутера": {
                        dhcp: {
                            value: `Настроить роутер легко! Для настройки потребуется номер договора и пароль.
Получить данные можно по ссылке https://dom.ru/user/recovery/pass
Чтобы настроить роутер перейдите на страницу https://dom.ru/faq/instruktsii-po-oborudovaniyu/instruktsiya-po-nastroike-routerov , выберите модель вашего роутера, тип авторизции DHCP и следуйте инструкции.
После настройки потребуется авторизация на портале https://start.dom.ru/

Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`
                        },
                        pppoe: {
                            value: `Настроить роутер легко! Для настройки потребуются данные логина и пароля, которые указаны в вашем договоре.
Чтобы настроить роутер перейдите на страницу https://dom.ru/faq/instruktsii-po-oborudovaniyu/instruktsiya-po-nastroike-routerov , выберите модель вашего роутера, тип авторизации РРРоЕ и следуйте инструкции.

Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`
                        }
                    },
                    "Повышение АП": {
                        default: {
                            value: `Действительно, по вашему договору запланировано изменение стоимости услуг. Подробную информацию о причинах можно узнать тут - https://dom.ru/news/s-1-oktyabrya-proizoydet-indeksatsiya-stoimosti-nekotorykh-uslug . Просим прочитать 🙏
А еще в личном кабинете могут быть интересные бонусы, рекомендуем заглянуть 😉
Если появятся вопросы - пишите🙂`
                        }
                    },
                    "КТВ, нет вещания на всех каналах": {
                        default: {
                            value: `Если телеканалы не работают, не переживайте - это легко исправить!📺
Мы подготовили инструкции на этот случай: https://dom.ru/faq/televidenie/net-vesania-na-vseh-kanalah
Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`,
                        }
                    },
                    "Активация ключа в МП": {
                        smartdom: {
                            value: `Активировать новый ключ легко!
В приложении Умный Дом.ру ••• раздел Кабинет - Мои ключи 🔑 - Регистрация нового ключа.
Познакомьтесь с нашим Мобильным приложением поближе 😊`
                        },
                        handling: {
                            value: `Я вам помогу и подскажу, как можно привязать ключ 😊
В будущем вы сможете самостоятельно привязывать новые ключи всего в пару кликов`
                        }
                    },
                    "Восстановление пин-кода РК Movix": {
                        default: {
                            value: `Восстановить пин-код легко! 🔧
Мы подготовили инструкцию на этот случай: https://dom.ru/faq/televidenie/chto-delat-esli-ya-zabyl-pin-kod
Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`
                        }
                    },
                    "Не проходит звонок в МП «Умный Дом.ru»": {
                        default: {
                            value: `Если звонок не приходит в приложение, не переживайте - это легко исправить📱

- Перейдите во вкладку ••• Кабинет и нажмите «Выйти из аккаунта»
- Переустановите приложение на устройство 🔄
- Пройдите авторизацию по договору и перезапустите приложение.
Готово! Можно проверять вызовы с панели 🤗

Если возникнут сложности или дополнительные вопросы - обращайтесь.
Обязательно поможем! 😉`
                        }
                    },
                    "ВН. Камера в статусе «недоступна»": {
                        default: {
                            value: `Если камера недоступна в приложении, не переживайте - это легко исправить 📹

- Перезагрузите камеру и роутер, отключив их ненадолго от питания 🔌
- Убедитесь, что после включения на устройствах загорелась индикация 💡
- Обновите «свайпом» главный экран приложения «Умный Дом.ru»
Готово! Можно проверять работу камеры 🤗

Если возникнут сложности или дополнительные вопросы - обращайтесь.
Обязательно поможем! 😉`
                        },
                    },
                    "Привязка пульта к ТВ (Movix Go, Movix Pro Model 2021)": {
                        default: {
                            value: `Привязать пульт к ТВ легко! 📺
Мы подготовили инструкции на этот случай: https://dom.ru/faq/instruktsii-po-oborudovaniyu/pult-movix-pro-model-2021-go-2023
Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`
                        }
                    },
                    "Приставка не реагирует на пульт (Movix Go, Movix Pro Model 2021)": {
                        default: {
                            value: `Первое, что нужно проверить, — батарейки🔋
Если вы давно не меняли их, необходимо это сделать. Если же в пульте новые батарейки, но приставка не реагирует, попробуйте выполнить привязку пульта по инструкции:
https://dom.ru/faq/instruktsii-po-oborudovaniyu/pult-movix-pro-model-2021-go-2023
Если возникнут сложности или дополнительные вопросы - обращайтесь! Будем рады помочь 😉`
                        }
                    },
                }
            }
        }
    },
    "Продажи": {
        subcategories: {
            "Декодеры": {
                    phrases: {
                        "Movix Model 2023": {
                            default: {
                                value: `Модель: Movix Model 2023
- Официальный Android TV 11
- Голосовой поиск (Google Assistant)
- Подключение устройств по Bluetooth
- Объемный звук Dolby Atmos
- Поддержка Dolby Vision
- Увеличенный объем памяти – 4 Гб RAM и 16 Гб Flash
- Подключение по Wi-Fi и кабелем
- Поддержка 4К
- Родительский контроль
- Управление просмотром
- Списки каналов
- Гарантия: 1 год

Стоимость
- В собственность - 6 200 ₽
- В рассрочку:
- 1 400 ₽/мес. на 6 месяцев (общая стоимость - 8 400 ₽)`
                            }
                        },
                        "Movix Model 2021": {
                            default: {
                                value: `Модель: Movix Model 2021
- Официальный Android TV 11
- Голосовой поиск (Google Assistant)
- Подключение устройств по Bluetooth
- Просмотр файлов с USB-флешки
- Поддержка 4К
- Подключение по Wi-Fi и кабелем
- Bluetooth 5.1
- Родительский контроль
- Управление просмотром
- Списки каналов
- Гарантия: 1 год

Стоимость:
- В собственность - 5 100 ₽
- В рассрочку:
- 980 ₽/мес. на 6 месяцев (общая стоимость - 5 880 ₽)`
                            }
                        },
                        "Movix Go": {
                            default: {
                                value: `Модель: Movix Go
- Официальный Android TV 11
- Голосовой поиск (Google Assistant)
- Подключение устройств по Bluetooth
- Поддержка 4К
- Подключение по Wi-Fi
- Bluetooth 5.1
- Родительский контроль
- Управление просмотром
- Списки каналов
- Гарантия: 1 год

Стоимость:
- В собственность - 5 590 ₽
- В рассрочку:
- 1080 ₽/мес. на 6 месяцев (общая стоимость - 6 480 ₽)`
                            }
                        }
                    },
                },
            "Роутеры": {
                    phrases: {
                        "TP-Link Archer EC220": {
                            default: {
                                value: `Модель: TP-Link Archer EC220
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 300 Мбит/с на 2,4 ГГц, до 867 Мбит/с на 5 ГГц
- Площадь покрытия: до 70 м2
- Одновременно устройств в сети: до 10
- Технологии: EasyMesh, MU-MIMO, Beamforming
- Гарантия: 3 года
- Отверстия для настенного крепления
- Подходит для любого провайдера

Стоимость:
- В собственность - 4 490 ₽
- В рассрочку:
- 825 ₽/мес. на 6 месяцев (общая стоимость - 4 950 ₽)`
                            }
                        },
                        "TP-Link Archer EX220": {
                            default: {
                                value: `Модель: TP-Link Archer EX220
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 574 Мбит/с на 2,4 ГГц, до 1201 Мбит/с на 5 ГГц
- Площадь покрытия: до 80 м2
- Одновременно устройств в сети: до 20
- Технологии: Мульти-SSID, EasyMesh, DL/UL OFDMA, MU-MIMO, Beamforming, Airtime Fairness
- Гарантия: 4 года
- Отверстия для настенного крепления
- Подходит для любого провайдера

Стоимость:
- В собственность - 6 800 ₽
- В рассрочку:
- 1 270 ₽/мес. на 6 месяцев (общая стоимость - 7 620 ₽)`
                            }
                        },
                        "TP-Link Archer EX511": {
                            default: {
                                value: `Модель: TP-Link Archer EX511
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 574 Мбит/с на 2,4 ГГц, до 1201 Мбит/с на 5 ГГц
- Площадь покрытия: до 80 м2
- Одновременно устройств в сети: до 50
- Технологии: Мульти-SSID, EasyMesh, OFDMA, MU-MIMO, Beamforming, Airtime Fairness и родительский контроль
- Гарантия: 4 года
- Отверстия для настенного крепления
- Подходит для любого провайдера

Стоимость:
- В собственность - 8 900 ₽
- В рассрочку:
- 1 650 ₽/мес. на 6 месяцев (общая стоимость - 9 900 ₽)`
                            }
                        },
                        "TP-Link Archer AX55": {
                            default: {
                                value: `Модель: TP-Link Archer AX55
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 574 Мбит/с на 2,4 ГГц, до 2402 Мбит/с на 5 ГГц
- Площадь покрытия: до 80 м2
- Одновременно устройств в сети: до 50
- Технологии: OneMesh, TP-Link HomeShield - защита от кибератак
- Гарантия: 4 года
- Отверстия для настенного крепления
- Подходит для любого провайдера

Стоимость:
- В собственность - 8 900 ₽
- В рассрочку:
- 1 650 ₽/мес. на 6 месяцев (общая стоимость - 9 900 ₽)`
                            }
                        },
                        "TP-Link Archer AX73": {
                            default: {
                                value: `Модель: TP-Link Archer AX73
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 574 Мбит/с на 2,4 ГГц, до 4804 Мбит/с на 5 ГГц
- Площадь покрытия: до 120 м2
- Одновременно устройств в сети: до 200
- Технологии: OneMesh, TP-Link Homeshield, OFDMA, MU-MIMO, Beam Steering, Beamforming, корпус с улучшенной вентиляцией
- Гарантия: 4 года
- Отверстия для настенного крепления
- Подходит для любого провайдера

Стоимость:
- В собственность - 12999 ₽
- В рассрочку:
- 1 210 ₽/мес. на 12 месяцев (общая стоимость - 14 520 ₽)
- 680 ₽/мес. на 24 месяца (общая стоимость - 16 320 ₽)`
                            }
                        },
                        "D-Link DIR842/R7": {
                            default: {
                                value: `Модель: D-Link DIR-842/R7
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 300 Мбит/с на 2,4 ГГц, до 867 Мбит/с на 5 ГГц
- Площадь покрытия: до 70 м2
- Одновременно устройств в сети: до 10
- Технологии: EasyMesh, Beamforming, Band Steering
- Гарантия: 1 год
- Отверстия для настенного крепления
- Подходит для любого провайдера

Стоимость:
- В собственность - 4 490 ₽
- В рассрочку:
- 825 ₽/мес. на 6 месяцев (общая стоимость - 4 950 ₽)`
                            }
                        },
                        "D-Link DIR-X1530": {
                            default: {
                                value: `Модель: D-Link DIR-X1530
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 300 Мбит/с на 2,4 ГГц, до 1201 Мбит/с на 5 ГГц
- Площадь покрытия: до 80 м2
- Одновременно устройств в сети: до 20
- Технологии: EasyMesh, Beamforming, OFDMA, TWT
- Гарантия: 1 год
- Отверстия для настенного крепления
- Подходит для любого провайдера

Стоимость:
- В собственность - 5 990 ₽
- В рассрочку:
- 1 115 ₽/мес. на 6 месяцев (общая стоимость - 6 690 ₽)`
                            }
                        },
                        "ASUS ROG Rapture GT-AX6000": {
                            default: {
                                value: `Модель: ROG Rapture GT-AX6000
- Скорость по кабелю: до 2500 Мбит/с
- Скорость по Wi-Fi: до 1148 Мбит/с на 2,4 ГГц, до 4804 Мбит/с на 5 ГГц
- Площадь покрытия: до 100 м2
- Технологии: AiMesh, ROG First, OpenNAT
- Гарантия: 3 года
- Подходит для любого провайдера

Стоимость:
- В собственность - 28000 ₽`
                            }
                        },
                        "Dom.ru Wave": {
                            default: {
                                value: `Модель: Wave
- Скорость по кабелю: до 1000 Мбит/с
- Скорость по Wi-Fi: до 500 Мбит/с
- Площадь покрытия: до 80 м2
- Технологии: EasyMesh
- Одновременно устройств в сети: до 50
- Гарантия: 1 год
- Подходит для любого провайдера

Стоимость:
- В собственность - 4 990 ₽
- В рассрочку:
- 930 ₽/мес. на 6 месяцев (общая стоимость - 5 580 ₽)`
                            }
                        }
                    }
                }
        }
    }
}

export const GET: APIRoute = ({ request }) => {
    const url = new URL(request.url);
    const categoryName = url.searchParams.get("category");
    const subCategoryName = url.searchParams.get("subcategory");
    const query = url.searchParams.get("query") || "";

    let result: StructuredData = {};

    const filterAndAddToResult = (data: StructuredData, category: string, subcategory: string, phrase: string) => {
        if (!result[category]) {
            result[category] = { badge: data[category].badge, subcategories: {} };
        }
        if (!result[category].subcategories[subcategory]) {
            result[category].subcategories[subcategory] = {
                badge: data[category].subcategories[subcategory].badge,
                phrases: {}
            };
        }

        const phraseData = data[category].subcategories[subcategory].phrases[phrase];
        const matchesQuery = (variant: PhraseVariant | undefined) =>
            variant && (variant.value.toLowerCase().includes(query.toLowerCase()) ||
                (variant.badge && variant.badge.text.toLowerCase().includes(query.toLowerCase())));

        if (phrase.toLowerCase().includes(query.toLowerCase()) ||
            Object.values(phraseData).some(matchesQuery)) {
            result[category].subcategories[subcategory].phrases[phrase] = phraseData;
        }
    };

    if (categoryName && phrases[categoryName]) {
        if (subCategoryName && phrases[categoryName].subcategories[subCategoryName]) {
            Object.keys(phrases[categoryName].subcategories[subCategoryName].phrases).forEach(phrase => {
                filterAndAddToResult(phrases, categoryName, subCategoryName, phrase);
            });
        } else {
            Object.keys(phrases[categoryName].subcategories).forEach(subcategory => {
                Object.keys(phrases[categoryName].subcategories[subcategory].phrases).forEach(phrase => {
                    filterAndAddToResult(phrases, categoryName, subcategory, phrase);
                });
            });
        }
    } else {
        Object.keys(phrases).forEach(category => {
            Object.keys(phrases[category].subcategories).forEach(subcategory => {
                Object.keys(phrases[category].subcategories[subcategory].phrases).forEach(phrase => {
                    filterAndAddToResult(phrases, category, subcategory, phrase);
                });
            });
        });
    }

    return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
    });
};
