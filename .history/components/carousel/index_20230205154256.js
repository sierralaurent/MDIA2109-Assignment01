import { useState } from 'react';
import image1 from './carousel-images/0.jpg'
import image2 from './carousel-images/1.jpg'
import image3 from './carousel-images/2.jpg'

export default function carousel() {

const images = [ image1, image2, image3] = useState(0);

return (
    <div>
        {images}
    </div>
)

}