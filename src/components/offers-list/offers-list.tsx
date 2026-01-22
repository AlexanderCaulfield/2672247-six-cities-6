import OfferCard from '../offer-card/offer-card';
import { Offer } from '../../types/offer';

type OffersListProps = {
  offers: Offer[];
  variant?: 'cities' | 'favorites';
  onActiveOfferChange?: (offerId: string | null) => void;
};

function OffersList({ offers, variant = 'cities', onActiveOfferChange }: OffersListProps): JSX.Element {
  const listClassName =
    variant === 'favorites'
      ? 'favorites__places'
      : 'cities__places-list places__list tabs__content';

  return (
    <div className={listClassName}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          variant={variant}
          onMouseEnter={() => onActiveOfferChange?.(offer.id)}
          onMouseLeave={() => onActiveOfferChange?.(null)}
        />
      ))}
    </div>
  );
}

export default OffersList;
