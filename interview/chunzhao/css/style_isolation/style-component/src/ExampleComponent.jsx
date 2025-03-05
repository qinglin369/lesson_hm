import react from 'react';
import styled from 'styled-components';


const  ExampleComponent = () => {
    return (
       <StyleExample>
        <p>这是一个带有styled-Component的样式组件</p>
       </StyleExample> 
    )
}
// 使用css in js 解决样式隔离
const StyleExample = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    color: red;
    p {

    }
`

export default ExampleComponent;