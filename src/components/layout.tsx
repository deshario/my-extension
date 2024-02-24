import { useState } from "react";
import {
  Icon,
  Menu,
  Card,
  Segment,
  Sidebar,
  MenuItem,
  CardHeader,
  CardContent,
  SidebarPusher,
  SemanticICONS,
  SidebarPushable,
} from "semantic-ui-react";

type Menus = {
  key: string;
  label: string;
  icon?: SemanticICONS;
};

const Layout = ({
  render,
}: {
  render: (activeMenu: string) => React.ReactNode;
}) => {
  const [visible, setVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState("clock");

  const menus: Menus[] = [
    {
      key: "clock",
      label: "Clock",
      icon: "clock outline",
    },
    {
      key: "alarm",
      label: "Alarm",
      icon: "alarm",
    },
    {
      key: "timer",
      label: "Timer",
      icon: "hourglass outline",
    },
    {
      key: "stopwatch",
      label: "Stopwatch",
      icon: "stopwatch",
    },
  ];

  const selectMenu = (menuKey: string) => {
    setActiveMenu(menuKey);
    setVisible(false);
  };

  return (
    <div>
      <SidebarPushable as={Segment} style={{ overflow: "hidden" }}>
        <Sidebar
          as={Menu}
          animation="push"
          direction="left"
          icon="labeled"
          inverted
          vertical
          visible={visible}
          onHide={() => setVisible(false)}
        >
          {menus.map((menu) => {
            return (
              <MenuItem
                as="a"
                active={menu.key === activeMenu}
                onClick={() => selectMenu(menu.key)}
              >
                <Icon name={menu.icon} />
                {menu.label}
              </MenuItem>
            );
          })}
        </Sidebar>

        <SidebarPusher dimmed={visible}>
          <div style={{ width: 350, height: 400 }}>
            <Card fluid style={{ marginBottom: 10, borderRadius: 0 }}>
              <CardContent>
                <CardHeader>
                  <Icon name="bars" onClick={() => setVisible((oks) => !oks)} />
                </CardHeader>
              </CardContent>
            </Card>
            <Card
              fluid
              style={{
                width: "97%",
                height: "84%",
                margin: "0px 5px",
              }}
            >
              {render(activeMenu)}
            </Card>
          </div>
        </SidebarPusher>
      </SidebarPushable>
    </div>
  );
};

export default Layout;
