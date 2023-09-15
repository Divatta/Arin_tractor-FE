import { Typography } from "antd"

const {Title, Text} = Typography;

function AboutInfo1() {
  return (
    <div>
        <div className="aboutInfo1">
            <div className="aboutContent">
                <Title level={3} className="title">ABOUT US</Title>
                <Text className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad vel aspernatur dolor earum quo, labore quia eum sequi blanditiis doloribus! Sint id tempora porro adipisci vel dignissimos quam soluta.</Text>
            </div>
            <div className="aboutContent">
                <Title level={3} className="title">OUR MISSION</Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad vel aspernatur dolor earum quo, labore quia eum sequi blanditiis doloribus! Sint id tempora porro adipisci vel dignissimos quam soluta.</Text>
            </div>
            <div className="aboutContent">
                <Title level={3} className="title">OUR VISION</Title>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem ad vel aspernatur dolor earum quo, labore quia eum sequi blanditiis doloribus! Sint id tempora porro adipisci vel dignissimos quam soluta.</Text>
            </div>
        </div>
    </div>
  )
}

export default AboutInfo1
