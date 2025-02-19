export const getLimitedData = <T>(data: T[] | undefined, limit: number) =>
{
	return data ? data?.slice(0, limit) : [];
};