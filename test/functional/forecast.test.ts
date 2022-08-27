describe('Beach forecast functional tests', () => {
  it('should return a forecast with just a few times', async () => {
    const { body, status } = await global.testRequest.get('/forecast');
    expect(status).toBe(200);
    expect(body).toEqual([
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
  });
});
