const request = require('supertest');
const app = require('../server');

describe('GET TripAdvisor Gallery Data', () => {
  let activityId;
  beforeEach(() => {
    activityId = Math.floor(Math.random() * 10000000);
  });

  test('should receive status code of 200', async () => {
    const res = await request(app)
      .get(`/tripAdvisor/${activityId}/gallery`);
    expect(res.statusCode).toEqual(200);
  });

  test('should receive an object with properties activity and photos', async () => {
    const res = await request(app)
      .get(`/tripAdvisor/${activityId}/gallery`);
    expect(res.body).toHaveProperty('activity');
    expect(res.body).toHaveProperty('photos');
  });

  test('activity object should have a name and location property', async () => {
    const res = await request(app)
      .get(`/tripAdvisor/${activityId}/gallery`);
    const { activity } = res.body;
    expect(activity).toHaveProperty('name');
    expect(activity).toHaveProperty('location');
  });

  test('photos property should be an an array of photos object', async () => {
    const res = await request(app)
      .get(`/tripAdvisor/${activityId}/gallery`);
    const { photos } = res.body;
    expect(Array.isArray(photos)).toBe(true);
  });

  test('photos object should have 9 properties', async () => {
    const res = await request(app)
      .get(`/tripAdvisor/${activityId}/gallery`);
    const { photos } = res.body;
    const [photo] = photos;
    expect(photo).toHaveProperty('link');
    expect(photo).toHaveProperty('alt');
    expect(photo).toHaveProperty('user');
    expect(photo).toHaveProperty('user_contributions');
    expect(photo).toHaveProperty('date_created');
    expect(photo).toHaveProperty('review_title');
    expect(photo).toHaveProperty('review_description');
    expect(photo).toHaveProperty('review_stars');
    expect(photo).toHaveProperty('review_helpful_score');
  });
});
