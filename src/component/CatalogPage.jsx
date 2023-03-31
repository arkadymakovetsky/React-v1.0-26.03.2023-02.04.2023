import React from 'react';
import './CatalogPage.css';

const items = [
    {
        "uid": "86ed58db-082d-45ab-aa81-5218059349cb",
        "title": "Скалярия зебра",
        "title_eng": "Pterophyllum scalare var.",
        "description": "Селекционная форма скалярии обыкновенной. Крупная высокотелая рыба, отличающаяся, несмотря на внушительные размеры, вполне уживчивым характером.",
        "src": "/img/A8s60.jpg",
        "price": 150,
        "qty": 60,
        "rating": 5
    },
    {
        "uid": "05542e59-7a90-4e80-bf9d-78967f272049",
        "title": "Дискус туркис красный",
        "title_eng": "Symphysodon aequifasciatus var.",
        "description": "Селекционная форма дискуса (Symphysodon aequifasciatus). Привлекает к себе внимание неординарным поведением, необычной формой тела, яркой окраской. Несмотря на внушительные габариты пригодна для совместного содержания с любыми мирными рыбами в общем аквариуме.",
        "src": "/img/A8u85.jpg",
        "price": 2000,
        "qty": 8,
        "rating": 1
    },
    {
        "uid": "7793e4f0-fe86-47cc-98f6-e01b6beeb3af",
        "title": "Апистограмма Рамирези - золотая",
        "title_eng": "Microgeophagus ramirezi var.",
        "description": "Одна из самых нарядных цихлид. Это, наряду с небольшими размерами и мирным поведением, обеспечивает ей огромную популярность среди как начинающих, так и опытных аквариумистов.",
        "src": "/img/A8f52.jpg",
        "price": 195,
        "qty": 2,
        "rating": 3
    },
    {
        "uid": "cdd8a823-a96e-4d91-90bf-fa4f96aa1bb1",
        "title": "Боция-клоун",
        "title_eng": "Chromobotia macracanthus",
        "description": "Один из наиболее популярных представителей рода. Крупная, территориальная рыба c яркой, бросающейся в глаза окраской. Ведет придонный образ жизни, любит прятаться в укрытиях. Предпочитает приглушенный, рассеянный свет, обилие растительности.",
        "src": "/img/A3r60.jpg",
        "price": 450,
        "qty": 10,
        "rating": 5
    },
    {
        "uid": "26c4c669-7a50-4b8a-85dd-8d038f0ee30a",
        "title": "Расбора феникс",
        "title_eng": "Boraras merah",
        "description": "Стайная спокойная рыба. Обычный размер в аквариуме 1-1,5 см. Самцы обладают более насыщенной окраской и более стройным сложением. Для содержания предпочтительна мягкая, кислая вода (pH 5,0-7,0)",
        "src": "/img/A2t63.jpg",
        "price": 90,
        "qty": 40,
        "rating": 4
    },
    {
        "uid": "ab8c9640-4033-4ac0-8d46-98af19b76245",
        "title": "Неон голубой",
        "title_eng": "Paracheirodon innesi",
        "description": "Благодаря своей подвижности, исключительной неприхотливости, миролюбию эта стайная рыба стала одной из самых популярных. Она подходит как новичкам, так и опытным аквариумистам. Особо выгодно смотрятся в водоемах с приглушенным освещением с темными растениями и грунтом. Аранжировка должна обеспечить наличие свободного пространства для плавания.",
        "src": "/img/A1s50.jpg",
        "price": 50,
        "qty": 100,
        "rating": 4
    },
    {
        "uid": "ab8c9640-4033-4ac0-8d46-98af19b7624a",
        "title": "Коридорас леопардовый",
        "title_eng": "Corydoras leopardus",
        "description": "Обычный размер около 6 см. Может достигать размера 8 см. Окраска напоминает окраску леопарда. Имеет миролюбивый характер и может уживаться со многими неагрессивными рыбами. Содержать в аквариуме желательно группу из пяти-шести рыбок.",
        "src": "/img/A4r00.jpg",
        "price": 86,
        "qty": 100,
        "rating": 4
    },
]


const CatalogPage = (props) => {

    const { basketItems } = props;
    const [sort, setSort] = React.useState({ field: null });
    const [view, setView] = React.useState('table');

    const useViewTable = () => setView('table');
    const useViewList = () => setView('list');

    // const usePriceDesc = () => setSort({ field: 'price', direction: 'DESC' });
    // const usePriceAsc = () => setSort({ field: 'price', direction: 'ASC' });
    // const useRatingDesc = () => setSort({ field: 'rating', direction: 'DESC' });
    // const useRatingAsc = () => setSort({ field: 'rating', direction: 'ASC' });

    const addItemToBasket = (addItem) => {

        let index = basketItems.findIndex(item => item.uid === addItem.uid)

        if (index >= 0 ) {
            basketItems[index].title = addItem.title;
            basketItems[index].description = addItem.description;
            basketItems[index].price = addItem.price;
            basketItems[index].qty++;
        } else {
            basketItems.push({
                "uid": addItem.uid,
                "title": addItem.title,
                "description": addItem.description,
                "price": addItem.price,
                "qty": 1
            })
        }
    }

    const changeSortPrice = () => {
        const field = 'price';
        const direction = sort.direction === 'ASC' ? 'DESC' : 'ASC';
        setSort({ field, direction })
    }

    const changeSortRating = () => {
        const field = 'rating';
        const direction = sort.direction === 'ASC' ? 'DESC' : 'ASC';
        setSort({ field, direction })
    }

    return (
        <div className='CatalogPage'>

            <div className='CatalogPageHeader'>
                <h2 className='CatalogPage_h2'>Каталог товаров</h2>
                <span className='CatalogPage_sort_item'>
                    <a href='#' className='CatalogPage_link' onClick={changeSortPrice}>
                        По цене
                        {sort.field === 'price' && sort.direction === 'ASC' ? <span>↑</span> : null}
                        {sort.field === 'price' && sort.direction === 'DESC' ? <span>↓</span> : null}
                    </a>
                </span>
                <span className='CatalogPage_sort_item'>
                    <a href='#' className='CatalogPage_link' onClick={changeSortRating}>
                        По популярности
                        {sort.field === 'rating' && sort.direction === 'ASC' ? <span>↑</span> : null}
                        {sort.field === 'rating' && sort.direction === 'DESC' ? <span>↓</span> : null}
                    </a>
                </span>
                <span className='CatalogPage_sort_item'>
                    Вид: <a href='#' className='CatalogPage_link' onClick={useViewTable}>Таблица</a> | <a href='#' className='CatalogPage_link' onClick={useViewList}>Список</a>
                </span>
            </div>

            <div className={'Catalog_items Catalog_items__' + view}>
                {items.sort((a, b) => {

                    if (sort.direction === 'ASC') return a[sort.field] - b[sort.field];
                    // if (sort.direction === 'DESC') return b[sort.field] - a[sort.field];
                    return b[sort.field] - a[sort.field];

                }).map((item, index) => (
                    <div className='CatalogProduct' key={item.uid}>
                        <img src={item.src} className='CatalgProduct_image' alt={item.title} />

                        <div className='CatalgProduct_title'>
                            <strong>{view === 'list' ? item.title : item.title.slice(0, 33)}</strong>
                            <br />
                            <em>{view === 'list' ? item.title_eng : item.title_eng.slice(0, 33)}</em>
                        </div>

                        <div className='CatalgProduct_price'>
                            {item.price}₽
                        </div>

                        {view === 'list' ? <div className='CatalgProduct_description'> {item.description.slice(0, 230)}</div> : null}

                        <div className='CatalgProduct_star' dangerouslySetInnerHTML={{ __html: '&starf;'.repeat(item.rating) }} />

                        <button className='btn CatalgProduct_addtobasket' onClick={ev => { ev.preventDefault(); addItemToBasket(item) }}>
                            В корзину
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
