import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Card from './Card';
import card from '../img/creditcard.svg';
import active from '../img/active.svg';
import inactive from '../img/inactive.svg';
import check from '../img/check.svg';
import checkDisabled from '../img/check-disabled.svg';

function PaymentSection() {
    return (
        <PaymentStyled>
            <InnerLayout>
                <h3 className="small-heading">An exceptional service, <span>at the right price</span></h3>
                <p className="c-para">Start with our free plan and switch to premium as you grow. </p>
                <p className="c-para">Courses In Demand </p>
                <div className="card-con">
                    <Card 
                    account={'Courses In Demand'}
                    amount={'$0'}
                    text={'Manage your Courses with a simple and efficient account which is totally free.'}
                    button={'Get Started'}
                    card={card}
                    active={active}
                    inactive={inactive}
                    check={check}
                    // checkDis={checkDisabled}
                    text1={'Introduction To hadoop'}
                    
                    text2={'Getting Started With Hadoop'}
                    text3={'Introduction To Hadoop'}
                    text4={'Introduction To Hadoop'}
                    text5={'Payment Issues'}
                    // text7={'Exchange 24 currencies'}
                    // text8={'Multi-user access'}
                    />
                    
                    <Card 
                    account={'Recent Activity'}
                    amount={''}
                    text={''}
                    button={''}
                    card={''}
                    active={''}
                    inactive={''}
                    check={''}
                    checkDis={''}
                    text1={''}
                    text2={''}
                    text3={''}
                    />

                   <Card 
                    account={'Recent Activity'}
                    // amount={''}
                    text={''}
                    button={''}
                    card={''}
                    active={''}
                    inactive={''}
                    check={''}
                    checkDis={''}
                    text1={''}
                    text2={''}
                    text3={''}
                  
                    />  

                    <Card 
                    account={'Announcements'}
                    // amount={''}
                    text={''}
                    button={''}
                    card={''}
                    active={''}
                    inactive={''}
                    check={''}
                    checkDis={''}
                    text1={''}
                    text2={''}
                    text3={''}
                  
                    />                
                </div>
            </InnerLayout>
        </PaymentStyled>
    )
}

const PaymentStyled = styled.section`
    .card-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 3rem;
        padding-top: 7.4rem;
        @media screen and (max-width: 689px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
    .c-para{
        text-align: center;
    }
`;
export default PaymentSection;
