import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';

@Controller('forecast')
export class ForecastController {
  @Get('')
  public getForecastForLoggedUser(_: Request, res: Response): void {
    res.send([
      {
        time: '2022-08-22T00:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 64.26,
            swellHeigth: 0.15,
            swellPeriod: 3.89,
            time: '2022-08-22T00:00:00+00:00',
            waveDirection: 231.38,
            waveHeigth: 0.47,
            windDirection: 299.45,
          },
        ],
      },
      {
        time: '2022-08-22T00:00:00+00:00',
        forecast: [
          {
            lat: -33.792726,
            lng: 151.289824,
            name: 'Manly',
            position: 'E',
            rating: 2,
            swellDirection: 123.41,
            swellHeigth: 0.21,
            swellPeriod: 3.67,
            time: '2022-08-22T00:00:00+00:00',
            waveDirection: 232.12,
            waveHeigth: 0.46,
            windDirection: 310.48,
          },
        ],
      },
    ]);
  }
}
