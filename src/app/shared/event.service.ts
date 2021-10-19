import { Injectable } from '@angular/core';
import { EventModel } from './event-model';

@Injectable()
export class EventService {

  private _events: EventModel[];

  constructor() {

    this._events = [
      {
        'id': 1,
        'name': 'Sziget Fesztivál',
        'date': '2017-08-03',
        'pictureURL': 'assets/sziget.png',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        'id': 2,
        'name': 'Diótörő Balett',
        'date': '2017-11-23',
        'pictureURL': 'assets/diotoro.jpg',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        'id': 3,
        'name': 'Macskák Musical',
        'date': '2018-02-11',
        'pictureURL': 'assets/macskak.jpg',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      },
      {
        'id': 4,
        'name': 'Fezen',
        'date': '2017-08-03',
        'pictureURL': 'http://www.kate.hu/wp-content/uploads/2015/07/135599150312020929_fezen_2015_datummal.jpg',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        'id': 5,
        'name': 'SZIN',
        'date': '2017-11-23',
        'pictureURL': 'https://www.koncert.hu/uploads/concerts/koncert-20140625-11470-szin_2014_2.jpg',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        'id': 6,
        'name': 'Rockmaraton',
        'date': '2018-02-11',
        'pictureURL': 'http://www.rockmaraton.hu/media/images/rockmaraton-2018-jegyvasarlas.jpg',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      },
      {
        'id': 7,
        'name': 'Black Hat USA',
        'date': '2017-08-03',
        'pictureURL': 'https://www.blackhat.com/images/page-graphics/metatag/event-logo-us17.png',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo.'
      },
      {
        'id': 8,
        'name': 'TEDx',
        'date': '2017-11-23',
        'pictureURL': 'https://i0.wp.com/www.tedxwellington.com/wp-content/uploads/2017/02/tedx-bulb.jpg',
        'description': 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        'id': 9,
        'name': 'ng-conf',
        'date': '2018-02-11',
        'pictureURL': 'https://cdn-images-1.medium.com/max/1270/1*2j7MOWb0s5pZpQLu7d-5CQ.png',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus.'
      }
    ]
  }
  getAllEvents(): EventModel[] {
    return this._events;
  }

}


