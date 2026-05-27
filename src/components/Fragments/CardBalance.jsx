import React, { PureComponent } from 'react';
import Card from "../Elements/Card";

export class CardBalance extends PureComponent {
  render() {
    return (
      <>
        <Card
            title="Total Balance"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, autem porro asperiores numquam sed veritatis debitis beatae amet laboriosam fuga pariatur sapiente suscipit culpa facere voluptatem. Repellat asperiores doloribus earum!"
        />      
      </>
    )
  }
}

export default CardBalance