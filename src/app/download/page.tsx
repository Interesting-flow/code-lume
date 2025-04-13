'use client';
import { downloadFile } from '@/utils/download';

const mockVersions = () => {
  const versions = [];
  for (let i = 1; i <= 18; i++) {
    versions.push({
      version: `v1.0.${i}`,
      date: new Date().toLocaleDateString(),
      release: 'https://github.com/your-repo/releases/tag/v1.0.' + i,
      description: `版本 ${i} 的说明`,
      doc: 'https://your-docs-url/v1.0.' + i,
      download: `https://example.com/download/v1.0.${i}`,
    });
  }
  return versions.reverse();
};

export default function DownloadClient() {
  const data = mockVersions();

  return (
    <table className="w-full bg-background rounded-lg shadow">
      <thead>
        <tr className="text-left text-foreground">
          <th className="px-4 py-2">版本</th>
          <th className="px-4 py-2">更新日期</th>
          <th className="px-4 py-2">releases</th>
          <th className="px-4 py-2">版本说明</th>
          <th className="px-4 py-2">Docs</th>
          <th className="px-4 py-2">下载</th>
        </tr>
      </thead>
      <tbody className="text-foreground/80">
        {data.map((record, index) => (
          <tr key={index} className="hover:bg-accent">
            <td className="px-4 py-2">{record.version}</td>
            <td className="px-4 py-2">{record.date}</td>
            <td className="px-4 py-2">
              <a href={record.release} target="_blank" rel="noopener noreferrer">
                {record.release}
              </a>
            </td>
            <td className="px-4 py-2">{record.description}</td>
            <td className="px-4 py-2">
              <a href={record.doc} target="_blank" rel="noopener noreferrer">
                使用文档
              </a>
            </td>
            <td className="px-4 py-2">
              <button
                onClick={() => downloadFile(record.download, record.version)}
                className="text-primary hover:text-primary/80 cursor-pointer"
              >
                下载
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}