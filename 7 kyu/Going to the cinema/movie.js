function movie(card, ticket, perc) {
	var sysA = 0;
	var sysB = card;
	var i = 0;
	while (Math.ceil(sysB) >= sysA) {
		sysA += ticket;
		sysB += Math.pow(perc, i + 1) * ticket;
		i += 1;
	}
	return i;
}
