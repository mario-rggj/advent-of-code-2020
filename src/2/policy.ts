export default interface Policy {
	validate(password: string): boolean;
}; // eslint-disable-line