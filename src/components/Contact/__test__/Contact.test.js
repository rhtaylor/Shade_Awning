import { render, screen } from '@testing-library/react';
import Contact from '../Contact.js'

describe('it shows email and phone number in screen',()=>{
    it('shows phone number and email',()=>{
        render(<Contact contact={{email: "jackisbusy@gmail.com", phone: "520-730-7020"}}/>);
        const elementContacts = screen.getAllByRole('heading',{email: 'jacksokcorrals@gmail.com'});
        expect(elementContacts.length).toBe(2);
    })
})