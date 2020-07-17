import React, { Component, createContext } from 'react';
const UserContext = createContext();

export class UserProvider extends Component {
	state = {
		sliders: [
			{
				id: 1,
				img: 'banner.jpg',
			},
			{
				id: 2,
				img: 'banner8.jpg',
			},
			{
				id: 3,
				img: 'banner6.jpg',
			},
			{
				id: 4,
				img: 'banner1.png',
            },
            {
				id: 5,
				img: 'banner7.jpg',
            },
            {
				id: 6,
				img: 'banner5.jpg',
			},
        ],
        customers: [
			{
				id: 1,
				name: 'Gunel Əlizadə',
				img: 'c1.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
			},
			{
				id: 2,
				name: 'Rakif Ramazanov',
				img: 'c2.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
			},
			{
				id: 3,
				name: 'Aysel Bayramova',
				img: 'c3.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
            },
			{
				id: 4,
				name: 'Ceyhun Bağırov',
				img: 'c4.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
            },
			{
				id: 5,
				name: 'Nigar Bayramova',
				img: 'c5.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
            },
			{
				id: 6,
				name: 'Mətin Nuri',
				img: 'c6.jpg',
				description:
					'Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio consectetur adipisicing elit.Ea consequuntur illum facere.',
            },
            
           
		],

		services:[
			{
				id:1,
				title:"Web saytlar",
				text:"Biznesinizi inkişaf etdirmək üçün müasir web saytların qurlması...",
			    image:"website.jpg"
			},
			{
				id:2,
				title:"Mobil Tətbiqlər",
				text:"Biznesinizi inkişaf etdirmək üçün müasir mobil tətbiqlərin  qurlması...",
			    image:"website.jpg"
			},
			{
				id:3,
				title:"Oyunların yaradılması",
				text:"İstənilən ideaya uygun oyunların hazırlanıb istifadəyə verilməsi...",
			    image:"website.jpg"
			},
			{
				id:4,
				title:"Uİ/UX dizayn",
				text:"Biznesinizi inkişaf etdirmək üçün müasir web saytların qurlması...",
			    image:"website.jpg"
			},
			
		]

	};
	render() {
		return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
	}
}
const UserConsumer = UserContext.Consumer;
export default UserConsumer;
