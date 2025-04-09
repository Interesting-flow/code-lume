'use client';
import { Table } from 'antd';
import { downloadFile } from '@/utils/download';

export default function DownloadClient({ data }: { data: any[] }) {
  const columns = [
    {
      title: '版本',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: '更新日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '文档',
      dataIndex: 'docs',
      key: 'docs',
    },
    {
      title: '下载',
      key: 'download',
      render: (_, record) => (
        <button
          onClick={() => downloadFile('/assets/img/image.png', 'codelume-setup.exe')}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          下载
        </button>
      ),
    },
  ];

  return (
    <Table 
      columns={columns}
      dataSource={data}
      pagination={false}
      className="bg-white dark:bg-gray-800 rounded-lg shadow"
    />
  );
}