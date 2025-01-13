import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getHelloWithName(name?: string): Promise<{ message: string } | string> {
    const response = await fetch('http://ip-api.com/json/');
    const ipLocation = await response.json();

    if (ipLocation.status === 'fail') {
      return `Hello! Failed to get the server location :(`;
    }

    const formattedTime = new Date().toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    return {
      message: `Hello ${name || 'Unknown'}! This response was served from ${ipLocation.city}, ${ipLocation.country} (${ipLocation.lat}, ${ipLocation.lon}) at ${formattedTime}`,
    };
  }
}
