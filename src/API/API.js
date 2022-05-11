import image1 from '../../src/assets/img/array/1.jpg';
import image2 from '../../src/assets/img/array/2.jpg';
import image3 from '../../src/assets/img/array/3.jpg';
import image4 from '../../src/assets/img/array/4.jpg';
import image5 from '../../src/assets/img/array/5.jpg';
import image6 from '../../src/assets/img/array/6.jpg';
import image7 from '../../src/assets/img/array/7.jpg';
import image8 from '../../src/assets/img/array/8.jpg';
import image9 from '../../src/assets/img/array/9.jpg';
import image10 from '../../src/assets/img/array/10.jpg';
import image11 from '../../src/assets/img/array/11.jpg';
import image12 from '../../src/assets/img/array/12.jpg';
import image13 from '../../src/assets/img/array/13.jpg';
import image14 from '../../src/assets/img/array/14.jpg';
import image15 from '../../src/assets/img/array/15.jpg';
import image16 from '../../src/assets/img/array/16.jpg';
import image17 from '../../src/assets/img/array/17.jpg';
import image18 from '../../src/assets/img/array/18.jpg';
import image19 from '../../src/assets/img/array/19.jpg';
import image20 from '../../src/assets/img/array/20.jpg';
import image21 from '../../src/assets/img/array/21.jpg';
import image22 from '../../src/assets/img/array/22.jpg';
import image23 from '../../src/assets/img/array/23.jpg';
import image24 from '../../src/assets/img/array/24.jpg';
import image25 from '../../src/assets/img/array/25.jpg';
import image26 from '../../src/assets/img/array/26.jpg';
import image27 from '../../src/assets/img/array/27.jpg';
import image28 from '../../src/assets/img/array/28.jpg';
import image29 from '../../src/assets/img/array/29.jpg';
import image30 from '../../src/assets/img/array/30.jpg';

export const getAllItems = () => {
    return new Promise((resolve) => {
        resolve({
            items: [
                {class: 'main__grid__column__img-box column-1 row-1', grid: '1', img: image1, key: Math.random()},
                {class: 'main__grid__column__img-box column-2 row-2', grid: '2', img: image2, key: Math.random()},
                {class: 'main__grid__column__img-box column-3 row-3', grid: '3', img: image3, key: Math.random()},
                {class: 'main__grid__column__img-box column-4 row-4', grid: '4', img: image10, key: Math.random()},
                {class: 'main__grid__column__img-box column-5 row-5', grid: '5', img: image5, key: Math.random()},
                {class: 'main__grid__column__img-box column-6 row-6', grid: '6', img: image6, key: Math.random()},
                {class: 'main__grid__column__img-box column-1 row-1', grid: '1', img: image7, key: Math.random()},
                {class: 'main__grid__column__img-box column-2 row-2', grid: '2', img: image8, key: Math.random()},
                {class: 'main__grid__column__img-box column-3 row-3', grid: '3', img: image9, key: Math.random()},
                {class: 'main__grid__column__img-box column-4 row-4', grid: '4', img: image29, key: Math.random()},
                {class: 'main__grid__column__img-box column-5 row-5', grid: '5', img: image11, key: Math.random()},
                {class: 'main__grid__column__img-box column-6 row-6', grid: '6', img: image12, key: Math.random()},
                {class: 'main__grid__column__img-box column-1 row-1', grid: '1', img: image13, key: Math.random()},
                {class: 'main__grid__column__img-box column-2 row-2', grid: '2', img: image14, key: Math.random()},
                {class: 'main__grid__column__img-box column-3 row-3', grid: '3', img: image15, key: Math.random()},
                {class: 'main__grid__column__img-box column-4 row-4', grid: '4', img: image4, key: Math.random()},
                {class: 'main__grid__column__img-box column-5 row-5', grid: '5', img: image17, key: Math.random()},
                {class: 'main__grid__column__img-box column-6 row-6', grid: '6', img: image18, key: Math.random()},
                {class: 'main__grid__column__img-box column-1 row-1', grid: '1', img: image19, key: Math.random()},
                {class: 'main__grid__column__img-box column-2 row-2', grid: '2', img: image26, key: Math.random()},
                {class: 'main__grid__column__img-box column-3 row-3', grid: '3', img: image21, key: Math.random()},
                {class: 'main__grid__column__img-box column-4 row-4', grid: '4', img: image22, key: Math.random()},
                {class: 'main__grid__column__img-box column-5 row-5', grid: '5', img: image28, key: Math.random()},
                {class: 'main__grid__column__img-box column-6 row-6', grid: '6', img: image25, key: Math.random()},
                {class: 'main__grid__column__img-box column-1 row-1', grid: '1', img: image30, key: Math.random()},
            ]
        })
    })
}