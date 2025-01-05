import { Injectable } from '@angular/core';

const domain = 'https://result.school';
const github = 'https://github.com/Ariel-cano'

export enum ProjectType {
  Layout = 'layout',
  Web = 'web',
  Other = 'other',
}

export interface IProduct {
  id: string;
  text: string;
  title: string;
  link: string;
  image: string;
  type: ProjectType;
}

function addDomainToLinkAndImage(product: IProduct) {
  return {
    ...product,
    image: domain + product.image,
    link: github + product.link,
  };
}

const products: IProduct[] = [
  {
    id: '1',
    title: 'js-website-constructor',
    link: '/js-website-constructor',
    image: '/img/icons/products/icon-javascript.svg',
    text: 'A portfolio project showcasing a dynamic JavaScript website constructor. This project demonstrates advanced JavaScript, DOM manipulation, modular code design, and bundling tools like Parcel for production-ready applications.',
    type: ProjectType.Web,
  },
  {
    id: '2',
    title: 'simple-weather-app',
    link: '/simple-weather-app',
    image: '/img/icons/products/icon-first-stage.svg',
    text: 'This project taught me how to work with APIs to fetch real-time data and display it dynamically on a web page. I learned how to structure and style HTML and CSS to create a responsive and user-friendly design. Additionally, I gained experience in handling asynchronous JavaScript functions to ensure smooth data loading.',
    type: ProjectType.Web,
  },
  {
    id: '3',
    title: 'japan-spots-layout',
    link: '/japan-spots-layout',
    image: '/img/icons/products/icon-second-stage.svg',
    text: 'This project is a fully responsive website layout created using modern web development techniques. It showcases my ability to implement adaptive design, integrate custom fonts, apply CSS resets for cross-browser compatibility, and add interactive elements with JavaScript',
    type: ProjectType.Layout,
  },
  {
    id: '4',
    title: 'website-layout-for-a-construction-company',
    link: '/website-layout-for-a-construction-company',
    image: '/img/icons/products/icon-html-css.svg',
    text: "This project is a responsive website layout created for a construction company, showcasing services, portfolio gallery, and key company information. The layout is built with a strong focus on Materialize CSS for styling and includes customizations to fit the company's brand.",
    type: ProjectType.Layout,
  },
  {
    id: '5',
    title: 'rock-paper-scissors-game',
    link: '/rock-paper-scissors-game',
    image: '/img/icons/products/icon-base-programming.svg',
    text: 'Developing this game helped me understand core JavaScript concepts like conditionals, functions, and event handling, while practicing DOM manipulation to update the game interface based on user interactions. It also gave me insights into designing a basic game loop and handling score tracking in the browser.',
    type: ProjectType.Other,
  },
  {
    id: '6',
    title: 'js-analyzer',
    link: '/js-analyzer',
    image: '/img/icons/products/icon-advanced-js.svg',
    text: 'A JavaScript-based syntax and semantic analyzer for Turbo Pascal variable declarations. The project validates syntax, checks semantic rules, detects errors and outputs a variable type table.',
    type: ProjectType.Other,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly products: IProduct[] = products.map(addDomainToLinkAndImage);

  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }

  get byGroup() {
    return this.products.reduce((group, prod) => {
      if (!group[prod.type]) {
        group[prod.type] = [];
      }
      group[prod.type].push(prod);
      return group;
    }, {});
  }
}
