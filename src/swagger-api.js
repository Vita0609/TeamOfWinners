import axios from 'axios';

class ApiService {
  async sendEmail(data) {
    try {
      const response = await axios.post(
        'https://scary-bellanca-subx1s0o-48ef86b3.koyeb.app/mail/send',
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getReviews() {
    try {
      const response = await axios.get(
        'https://portfolio-js.b.goit.study/api/reviews'
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default new ApiService();
