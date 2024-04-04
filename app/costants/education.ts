import { IEducation, ILicenses, IExperience } from '../models/IEducationSection'


export const educationEN: IEducation[] = [
    { id: 1, title: "Bachelor's degree", years: '2016-2020', university: 'Brno University of Technology', faculty: 'Faculty of Mechanical Engineering', programme: 'Programme : Fundamentals of Mechanical Engineering' },
    { id: 2, title: "Master's degree", years: '2020-2023', university: 'Brno University of Technology', faculty: 'Faculty of Mechanical Engineering', programme: 'Programme : Production Machines, Systems and Robots' },
]
export const educationCZ: IEducation[] = [
    { id: 1, title: "Bakalářské studium", years: '2016-2020', university: 'Vysoké učení technické v Brně', faculty: 'Fakulta strojního inženýrství', programme: 'Program : Základy strojírenství' },
    { id: 2, title: "Magisterské studium", years: '2020-2023', university: 'Vysoké učení technické v Brně', faculty: 'Fakulta strojního inženýrství', programme: 'Program : Výrobní stroje, systémy a roboty' },
]
export const educationRU: IEducation[] = [
    { id: 1, title: "Степень бакалавра", years: '2016-2020', university: 'Брненский технологический университет', faculty: 'Факультет машиностроения', programme: 'Программа : Основы машиностроения' },
    { id: 2, title: "Степень магистра", years: '2020-2023', university: 'Брненский технологический университет', faculty: 'Факультет машиностроения', programme: 'Программа : Производственные машины, системы и роботы' },
]

export const licenses: ILicenses[] = [
    { id: 1, title: "HTML and CSS in depth", company: 'Meta' },
    { id: 2, title: "React Basics", company: 'Meta' },
    { id: 3, title: "Advanced React", company: 'Meta' },
    { id: 4, title: "Principles of UX/UI Design", company: 'Meta' },
    { id: 5, title: "Front-End Developer Capstone", company: 'Meta' },
    { id: 6, title: "Data Analysis and Visualization in Python", company: 'Brno University of Technology FIT' },
]

export const experienceEN: IExperience[] = [
    {
        id: 1,
        title: "Sales Assistant",
        years: '2014-2015',
        company: 'Ural Oil',
        description: 'As a sales assistant, my primary responsibility was to provide vital support in the tender process. This involved gathering and organizing essential documentation, such as proposals, quotations, and technical specifications. I collaborated closely with the sales team, ensuring that all tender submissions were accurate, complete, and submitted within deadlines.'
    },
    {
        id: 2,
        title: "Mostly service staff",
        years: '2015- Oct 2019',
        company: 'Various companies',
        description: 'During university, I worked various service jobs such as waiter or help in a kitchen.'
    },
    {
        id: 3,
        title: "Mechanical designer",
        years: 'Oct 2019 - Jun 2021',
        company: 'Project Controls s.r.o.',
        description: "In my capacity as a Mechanical Designer, my core responsibilities encompassed crafting design proposals and innovative solutions for project documentation. I specialized in supporting manufacturing processes, ensuring that designs were optimized for seamless production. Moreover, I played a pivotal role in maintaining and updating technical documentation, serving both our customers and suppliers. I engaged in close collaboration with customers and suppliers to refine technical specifications, aligning our designs with their unique requirements."
    },
    {
        id: 4,
        title: "Mechanical designer",
        years: 'Jun 2021 - Dec 2023',
        company: 'IFE-CR',
        description: "In my role was a Mechanical Designer at IFE-CR, I was a key player in designing innovative product solutions and new models, with a specialization in door leaf design. Collaboration was at the heart of my work, as I engaged with various departments and levels within the organization. Besides I was responsible for crafting comprehensive project documentation and implementing design changes to keep our projects adaptable. Additionally, I maintained and updated technical documentation for both our customers and suppliers. Notably, my diploma work was conducted in collaboration with IFE - CR, further underscoring my dedication to the company's success."
    },
    {
        id: 5,
        title: "Technical Support Engineer",
        years: 'Jan 2024 - Present',
        company: 'Oracle',
        description: "My job involves assisting clients and the team, solving problems, and improving JavaScript code. I actively debug new and existing code, propose efficient solutions to optimize work and enhance service quality. Additionally, my duties include supporting and integrating web services, working with RestAPI and SOAP requests, and executing SQL database queries."
    },
]

export const experienceCZ: IExperience[] = [
    {
        id: 1,
        title: "Asistent obchodního oddělení",
        years: '2014 - 2015',
        company: 'Ural Oil',
        description: 'Jako asistent obchodního oddělení jsem měl hlavní odpovědnost za poskytování zásadní podpory v procesu výběrového řízení. To zahrnovalo shromažďování a organizaci základní dokumentace, jako jsou návrhy, nabídky a technické specifikace. Úzce jsem spolupracoval s prodejním týmem a zajistoval jsem, aby všechny nabídky byly přesné, úplné a odevzdané ve stanovených termínech.'
    },
    {
        id: 2,
        title: "Většinou servisní personál",
        years: '2015 - Říjen 2019',
        company: 'Různé společnosti',
        description: 'Během vysoké školy jsem dělal různé obslužné práce jako číšník nebo pomocná síla v kuchyni.'
    },
    {
        id: 3,
        title: "Mechanický konstruktér",
        years: 'Říjen 2019 - Červen 2021',
        company: 'Project Controls s.r.o.',
        description: "V mé funkci strojního konstruktéra patřilo k mým hlavním povinnostem vytváření návrhů designu a inovativní řešení projektové dokumentace. Specializoval jsem se na podporu výrobních procesů a zajistoval jsem optimalizaci návrhů pro bezproblémovou výrobu. Kromě toho jsem hrál klíčovou roli při udržování a aktualizaci technické dokumentace, která sloužila našim zákazníkům i dodavatelům. Úzce jsem spolupracoval se zákazníky a dodavateli, abych zdokonalil technické specifikace a sladil naše návrhy s jejich jedinečnými požadavky."
    },
    {
        id: 4,
        title: "Mechanický konstruktér",
        years: 'Červen 2021 - Prosinec 2023',
        company: 'IFE-CR',
        description: "Ve své roli mechanického konstruktéra v IFE-CR byl jsem klíčovým hráčem při navrhování inovativních produktových řešení a nových modelů se specializací na design dveřních křídel. Spolupráce byla jádrem mé práce, protože jsem byl v kontaktu s různými odděleními a úrovněmi v rámci organizace. Kromě toho jsem zodpovídal za zpracování komplexní projektové dokumentace a implementaci změn designu, aby byly naše projekty přizpůsobivé. Kromě toho jsem udržoval a aktualizoval technickou dokumentaci pro naše zákazníky i dodavatele. Zejména moje diplomová práce byla vedena ve spolupráci s IFE - ČR, což ještě více podtrhlo mou oddanost úspěchu společnosti."
    },
    {
        id: 5,
        title: "Technical Support Engineer",
        years: 'Leden 2024 - Současnost',
        company: 'Oracle',
        description: "Moje práce spočívá v poskytování pomoci klientům a týmu, řešení problémů a zlepšování kódu v JavaScriptu. Aktivně se věnuji ladění nového a stávajícího kódu, navrhuji efektivní řešení pro optimalizaci práce a zlepšení kvality služeb. Kromě toho patří do mých povinností podpora a integrace webových služeb, včetně práce s RestAPI a SOAP dotazy, a také provádění dotazů na SQL databáze. "
    },
]

export const experienceRU: IExperience[] = [
    {
        id: 1,
        title: "Помощник по продажам",
        years: '2014 - 2015',
        company: 'Ural Oil',
        description: 'Моя основная обязанность как продавца-консультанта заключалась в обеспечении жизненно важной поддержки в тендерном процессе. Это включало сбор и организацию необходимой документации, такой как предложения, расценки и технические спецификации. Я тесно сотрудничал с отделом продаж, следя за тем, чтобы все тендерные заявки были точными, полными и подавали в установленные сроки.'
    },
    {
        id: 2,
        title: "В основном обслуживающий персонал",
        years: '2015 - Окт 2019',
        company: 'Различные компании',
        description: 'Во время учебы в университете я работал на различных должностях в сфере обслуживания, например, официантом или помощником на кухне.'
    },
    {
        id: 3,
        title: "Механический конструктор",
        years: 'Окт 2019 - Июнь 2021',
        company: 'Project Controls s.r.o.',
        description: "В качестве конструктора-механика мои основные обязанности заключались в разработке проектных предложений и инновационных решений для проектной документации. Я специализировался на поддержке производственных процессов, гарантируя, что проекты будут оптимизированы для бесперебойного производства. Более того, я играл ключевую роль в поддержании и обновлении технической документации, обслуживая как наших клиентов, так и поставщиков. Я тесно сотрудничал с клиентами и поставщиками для уточнения технических спецификаций и приведения наших проектов в соответствие с их уникальными требованиями."
    },
    {
        id: 4,
        title: "Механический конструктор",
        years: 'Июнь 2021 - Дек 2023',
        company: 'IFE-CR',
        description: "В должности конструктора-механика в IFE-CR я играл ключевую роль в разработке инновационных продуктовых решений и новых моделей, специализируясь на дизайне дверных полотен. Сотрудничество лежит в основе моей работы, поскольку я взаимодействовал с различными отделами и уровнями внутри организации. Кроме того, я отвечал за разработку комплексной проектной документации и внесение изменений в дизайн, чтобы наши проекты были адаптируемыми. Кроме того, я вел и обновлял техническую документацию как для наших клиентов, так и для поставщиков. Примечательно, что моя дипломная работа проводилась в сотрудничестве с IFE - CR, что еще раз подчеркивает мою приверженность успеху компании. Вы можете найти его ниже."
    },
    {
        id: 5,
        title: "Technical Support Engineer",
        years: 'Янв 2024 - В настоящее время',
        company: 'Oracle',
        description: "Моя работа заключается в оказании помощи клиентам и команде, решении проблем и улучшении кода на JavaScript. Я активно занимаюсь отладкой нового и существующего кода, предлагаю эффективные решения для оптимизации работы и повышения качества обслуживания. Кроме того, в мои обязанности входит поддержка и интеграция веб-сервисов, включая работу с RestAPI и SOAP-запросами, а также выполнение запросов к SQL-базам данных."
    },
]