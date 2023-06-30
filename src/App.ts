import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid #FFD177;
  position: relative;
  overflow: hidden;
  z-index: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  
  .backgroundImg{
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    z-index: -1;
    filter: drop-shadow(2px 4px 6px black);
  }
  
  .header{
    width: 99%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px auto;
    background: linear-gradient(rgb(255 255 255 / 24%), #fff0);
  }

  .firstLogo{
    width: 100%;
    max-width: 373px;
    max-height: 217px;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    padding: 5px 10px;
    border-radius: 28px;
    gap: 10px;
    border: 1px solid #FFD177;
    position: relative;
    overflow: hidden;
    width: min-content;
    margin-bottom: 20px;

    a {
      transition: 0.1s;
      position: relative;

      &:hover{color: #FFD177;}
      &::before{
        content: "";
        width: 0%;
        height: 0.5px;
        position: absolute;
        transform: translate(-50%,-50%);
        bottom: 3px;
        left: 50%;
        background: #FFD177;
        transition: 0.1s;
      }
      &:hover:before{
        width: 100%;
      }
    }
    &::before{
      content: "";
      position: absolute;
      height: 80%;
      border: 1px solid #FFD177;
      width: 150%;
    }
  }

  .content_wrapper{
    width: 95%;
    margin: 0 auto;
    position: relative;

    .content_bg{
      position: absolute;
      top: 0px;
      left: 0px;
      display: flex;
      flex-direction: column;
      z-index: 1;
      width: 100%;

      .card_img{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 40px;
        
        p {
          padding: 10px 30px 10px 10px;
          margin: 0;
          height: min-content;
          overflow: hidden;
          position: relative;
          
          &::before{
            content: "";
            position: absolute;
            height: 95%;
            border: 2px solid #FFD177;
            width: 150%;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
          }
          &::after {
            content: "";
            position: absolute;
            width: 50px;
            height: 50px;
            border: 2px solid #FFD177;
            transform: rotate(45deg) translate(-25%, -50%);
            top: 50%;
            left: 96%;
          }
        }
      }

      img {
        width: 100%;
        max-width: 250px;
        min-width: 250px;
      }
    }

    .content_main{
      width: 85%;
      margin-top: 100px;
      margin-left: auto;
      position: relative;
      z-index: 2;
      display: flex;

      .img_wrapper{
        display: flex;
        flex-direction: column;
        gap: 30px;

        img {
          width: 100%;
          max-width: 250px;
          min-width: 250px;
        }
      }

      .content_text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p{
          padding: 10px;
          border: 1px solid #FFD177;
          margin: 0;
        }

        img {
          width: 115%;
          height: 125px;
          transform: translateX(-15%);
          position: relative;
          z-index: -1;
        }
      }
    }
  }

  .description{
    box-sizing: border-box;
    width: 95%;
    margin: 50px auto 0px auto;
    text-align: center;
    padding: 20px 30px;
    position: relative;
    overflow: hidden;
    border-top: 1px solid #FFD177;
    border-bottom: 1px solid #FFD177;

    &::before {
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      border: 2px solid #FFD177;
      transform: rotate(45deg) translate(-25%, -50%);
      top: 50%;
      left: -4.5%;
    }

    &::after {
      content: "";
      position: absolute;
      width: 60px;
      height: 60px;
      border: 2px solid #FFD177;
      transform: rotate(45deg) translate(-25%, -50%);
      top: 50%;
      left: 96%;
    }
  }

  .final_art{
    width: 95%;
    margin: 15px auto;
  }
  .description2{
    box-sizing: border-box;
    width: 95%;
    margin: 0 auto;
    border: 2px solid #FFD177;
    padding: 15px;
    text-align: center;
  }

  footer{
    font-weight: 500;
    text-align: center;
    position: relative;
    margin-top: 45px;
    justify-content: center;
    align-items: center;
    width: 100%;

    p{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-90%);
    }

    .secondLogo{
      width: 75px;
      max-height: 150px;
    }
  }

  .contactInfos{
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 12px;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    .contactInfos{
      position: relative;
      flex-direction: column;
      text-align: center;
      
      p{
        margin: 3px;
      }
    }
  }
`;
