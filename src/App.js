import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import moment from 'moment';

export default class App extends Component {
  render() {
    const size = 'large';
    return (
      <>
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
        <hr/>
        <DatePicker defaultValue={moment('2015-06-06','YYYY-MM-DD')}/>
      </>
    )
  }
}
