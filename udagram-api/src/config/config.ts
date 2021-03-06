import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

// ENV variables
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
	username: process.env.POSTGRES_USERNAME,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DB,
	port: Number(process.env.POSTGRES_PORT),
	host: process.env.POSTGRES_HOST,
	dialect: 'postgres',
	// eslint-disable-next-line camelcase, @typescript-eslint/camelcase
	aws_region: process.env.AWS_REGION,
	// eslint-disable-next-line camelcase, @typescript-eslint/camelcase
	aws_profile: process.env.AWS_PROFILE,
	// eslint-disable-next-line camelcase, @typescript-eslint/camelcase
	aws_media_bucket: process.env.AWS_BUCKET,
	url: process.env.URL,
	jwt: {
		secret: process.env.JWT_SECRET,
	},
};
